import { atom, Getter } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { atomWithCallback } from '../hooks/atomsX';
import debounce from '../utils/debounce';

namespace Storage {
    const KEY = 'simple-border-radius22';

    type Store = {
        dark: boolean;
    };

    export let initialData: Store = {
        dark: false,
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                initialData = obj;
            } catch (error) {
            }
        }
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            dark: get(DarkShemaAtom),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => saveDebounced(get);

} //namespace Storage

export const DarkShemaAtom = atomWithCallback(Storage.initialData.dark, Storage.save);
