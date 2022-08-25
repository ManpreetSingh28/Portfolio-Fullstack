System Admin ---------- Interwork

Honda - tenantID - T-001

	Super Admin - Vishnu
		- New User creation
		- activate, deactivate, reactivate, delete, password change
		- roles management
		- subscriptions
		- master configuration
		
		- role - Super Admin
		- adminID - 1234
		- tenantID - T-001
		
	Sub Admin - MOhit
		- new user creation
		- roles management
		
		- role - Sub Admin
		- adminID - 1234
		- tenantID - T-001
		- userID - 0987
	Sub Admin - Karan
		- activate, reactivate, delete, password change
		
		- role - Sub Admin
		- adminID - 1234
		- tenantID - T-001
		- userID - 0746
	Procurement
	Production

								userID - 1234, tenantID: T-001 - Super Admin - Honda
								   |
						Procurement - userID:p1, adminID:1234, tenantID: T-001
						      |
				subProcurement-1	subProcurement-2
				adminID: p1		adminID: p1
				userID: sp1		userID: sp2
				tenantID: T-001	tenantID: T-001



TVS - tenantID - T-002
