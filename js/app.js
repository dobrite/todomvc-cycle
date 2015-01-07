'use strict';
/*global Cycle */

Cycle.createRenderer('#todoapp').inject(TodosView);
TodosDataFlowSink.inject(TodosModel);
TodosIntent.inject(TodosView);
TodosView.inject(TodosModel);
TodosModel.inject(TodosIntent, InitialTodosModel);
