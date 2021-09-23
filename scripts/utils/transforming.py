from pandas import DataFrame, Series
import numpy as np


def log_returns(series: Series):
    r = np.log(series) - np.log(series.shift(1))
    return r


defined_labels = {
    'sign':
        {-1: (np.NINF, 0),
         1: (0, np.Inf)},

    'magnitude': {
        20: (np.NINF, np.Inf),
        10: (-0.10, 0.10),
        5: (-0.05, 0.05),
        1: (-0.01, 0.01)}
}


def fixed_horizon_label(df, label=None, column="log_returns"):
    if label is None:
        labels = defined_labels['positive_skewed']
    else:
        labels = defined_labels[label]
    label_df = DataFrame(index=np.arange(len(df)))
    label_df[f'{column}_label'] = np.nan
    for labels, span in labels.items():
        label_df[f'{column}_label'] = np.where((span[0] <= df[column]) & (df[column] < span[1]),
                                               labels,
                                               label_df[f'{column}_label'])
    return label_df


def add_all_labels(df, column="log_returns"):
    for name, labels in defined_labels.items():
        df[name] = fixed_horizon_label(df, label=labels, column=column)
