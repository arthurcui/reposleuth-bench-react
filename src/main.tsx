import React from 'react';
import { createRoot } from 'react-dom/client';
import { Counter } from './Counter';
import { Customer } from './Customer';
import { TaskList } from './TaskList';
import { Cart } from './Cart';
import { Tasks } from './Tasks';
createRoot(document.getElementById('root')!).render(<main><h1>Operations Dashboard</h1><Counter/><Customer/><TaskList/><Cart/><Tasks/></main>);
