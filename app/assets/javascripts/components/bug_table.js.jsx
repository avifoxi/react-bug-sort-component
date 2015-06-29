var BugTable = React.createClass({

  changeGroupBy: function(e){
  	this.setState({groupBy: e.target.value});
  },
  arrangeBugRows: function(){
  	
  },
  render: function() {
    var bugRows = this.state.bugs.map(function(b){
    	return (
    		<tr>
					<td>
						admin #{b.admin_id}
					</td>
					<td>
						{ b.status }
					</td>
					<td>
						Project #{b.project_id}
					</td>
				</tr>
    	)
    });

    return (
    	<div>
    		<hr/>
	    	<select onChange={this.changeGroupBy}>
	    		<option value='admins'>admins</option>
	    		<option value='projects'>projects</option>
	    		<option value='status'>status</option>
	    	</select>
	    	<hr/>
	    	{this.state.groupBy}
	    	<br/>
	    	<table>
	    		<tr>
						<th>
							Assigned Admin
						</th>
						<th>
							Status
						</th>
						<th>
							Project
						</th>
					</tr>
					{bugRows}
	    	</table>
    	</div>
    );
  },
  getInitialState: function(){
  	return {
  		bugs: [],
  		groupBy: 'admins'
  	};
  },
  componentDidMount: function(){
  	var self = this;
  	$.get('/bugs', function(bugs){
  		self.setState({bugs: bugs});
  	});
  }
});
