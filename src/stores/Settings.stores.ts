import { createState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import { Settings } from '@unify/types';

export const globalSettings = createState<Settings>({ channel: 'stable', projects: [] }).attach(
    Persistence('unify:settings'),
);
