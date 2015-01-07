'use strict';

// Observe all todos data and save them to localStorage
var TodosDataFlowSink = Cycle.createDataFlowSink(function (model) {
	return model.get('todos$').subscribe(function (todosData) {
		var savedTodosData = {
			list: todosData.list.map(function (todoData) {
				return {
					title: todoData.title,
					completed: todoData.completed,
					index: todoData.index
				};
			})
		};
		localStorage.setItem('todos-cycle', JSON.stringify(savedTodosData))
	})
});
