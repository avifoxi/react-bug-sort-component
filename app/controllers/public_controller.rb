class PublicController < ApplicationController
	def index
	end

	def bugs
		render json: [
				{
					admin_id: 1,
					status: 'Open',
					project_id: 3
				},
				{
					admin_id: 2,
					status: 'Verify',
					project_id: 1
				},
				{
					admin_id: 3,
					status: 'Closed',
					project_id: 2
				},
				{
					admin_id: 1,
					status: 'Open',
					project_id: 1
				},
				{
					admin_id: 3,
					status: 'Closed',
					project_id: 2
				},
				{
					admin_id: 2,
					status: 'Open',
					project_id: 1
				},
				{
					admin_id: 3,
					status: 'Closed',
					project_id: 2
				},
				{
					admin_id: 2,
					status: 'Verify',
					project_id: 1
				},
				{
					admin_id: 1,
					status: 'Open',
					project_id: 3
				}
		].to_json
	end
end
