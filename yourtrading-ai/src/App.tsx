import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const initialState = { name: '', description: '' };

const styles = {
    container: {
        width: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    todo: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 700 },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
};

type TTodo = { id: string; name: string; description: string };
const App: React.FC = () => {
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState<TTodo[]>([]);

    async function fetchTodos() {
        try {
            const todoData = (await API.graphql(graphqlOperation(listTodos))) as {
                data: { listTodos: { items: TTodo[] } };
            };
            const todos2 = todoData.data.listTodos.items;
            setTodos(todos2);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('error fetching todos');
        }
    }

    useEffect(() => {
        void fetchTodos();
    }, []);

    function setInput(key: string, value: string) {
        setFormState({ ...formState, [key]: value });
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return;
            const todo = { ...formState };
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTodos([...todos, todo]);
            setFormState(initialState);
            await API.graphql(graphqlOperation(createTodo, { input: todo }));
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('error creating todo:', err);
        }
    }

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div style={styles.container}>
            <h2>Amplify Todos</h2>
            <input
                onChange={(event) => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={(event) => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
            <button style={styles.button} onClick={addTodo}>
                Create Todo
            </button>
            {todos.map((todo, index) => (
                <div key={todo.id ? todo.id : index} style={styles.todo}>
                    <p style={styles.todoName}>{todo.name}</p>
                    <p style={styles.todoDescription}>{todo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default withAuthenticator(App);
