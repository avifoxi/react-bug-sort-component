var BugFilter = React.createClass({

  getInitialState: function () {
			return {
				options: {
					admins: [{name: 'Avi', id: 1}, {name:'Dhruv', id:2}, {name:'Mystery Man', id:3}],
					statuses: ['Open', 'Verify', 'Closed'],
					projects: [{name:'Rhinestones', id:1}, {name:'Undies', id:2}, {name:'Chicken Bait', id:3}]
				},
				currentlySelected: 'admins'
			}
		},
		mapOptionsToSelect: function (options) {
			var self = this;
			var optionSelect = options.map(function(option) {
				var value, display;
				if (option.id){
					value = option.id;
					display = option.name;
				} else {
					value = option;
					display = option;
				}
	  		return (
	  			<option value={value}>{display}</option>
	  		);
	  	});
	  	console.log(optionSelect);
			return optionSelect;
		},
		mapOptionsToSelectA: function(){
			var self = this;
			var options = Object.getOwnPropertyNames(self.state.options);
			return self.mapOptionsToSelect(options);
		},
		mapToSelectB: function(){
			var self = this;
			var options = self.state.options[self.state.currentlySelected]
			return self.mapOptionsToSelect(options);
		},
	  render: function() {

	  	var self = this;			
			var selectB = this.mapToSelectB();
			console.log(selectB);
	  	var currentSelection = this.state.currentlySelected;

	  	var selectA = this.mapOptionsToSelectA();

	    return (
	      <div className="bugsFilter">
	      	<label for="">Filter Bugs By:</label>
	      	<br/>
	      	<select onChange={this.handleOptionSelection}>
				    {selectA}
				  </select>
				  <hr/>
				  <label for="">By Value</label>
	      	<br/>
	      	<select>
				    {selectB}
				  </select>
				  <hr/>
				  <label for="">Search text for:</label>
				  <input type="text"/>
	      </div>
	    );
	  },
	  handleOptionSelection: function(event){
	  	this.setState({currentlySelected: event.target.value});
	  	var foo = this.state.currentlySelected;
	  	console.log(foo);
	  }
});
