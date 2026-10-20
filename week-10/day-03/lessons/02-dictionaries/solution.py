"""Both inline dictionary challenges."""


def history_mark():
    sample_dict = {'class': {'student': {'name': 'Mike', 'marks': {'physics': 70, 'history': 80}}}}
    return sample_dict['class']['student']['marks']['history']


def remove_keys(dictionary, keys):
    result = dict(dictionary)
    for key in keys: result.pop(key, None)
    return result


if __name__ == '__main__':
    print(history_mark())
    print(remove_keys({'name': 'Kelly', 'age': 25, 'salary': 8000, 'city': 'New york'}, ['name', 'salary']))
