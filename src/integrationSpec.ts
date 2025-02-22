export const integrationSpec = {
	data: {
		date: {
			created_at: "2025-02-22",
			updated_at: "2025-02-22",
		},
		descriptions: {
			app_description: "A brief description of the application functionality.",
			app_logo: "https://iili.io/39yNN6B.png",
			app_name: "Testing application",
			app_url: "https://c3zzjvc2-3006.uks1.devtunnels.ms",
			background_color: "#HEXCODE",
		},
		integration_category: "Monitoring & Logging",
		integration_type: "interval",
		is_active: false,
		output: [
			{
				label: "output_channel_1",
				value: true,
			},
			{
				label: "output_channel_2",
				value: false,
			},
		],
		key_features: [
			"Feature description 1.",
			"Feature description 2.",
			"Feature description 3.",
			"Feature description 4.",
		],
		permissions: {
			monitoring_user: {
				always_online: true,
				display_name: "Performance Monitor",
			},
		},
		settings: [
			{
				label: "interval",
				type: "text",
				required: true,
				default: "* * * * *",
			},
			{
				label: "Key",
				type: "text",
				required: true,
				default: "1234567890",
			},
			{
				label: "Do you want to continue",
				type: "checkbox",
				required: true,
				default: "Yes",
			},
			{
				label: "Provide Speed",
				type: "number",
				required: true,
				default: "1000",
			},
			{
				label: "Sensitivity Level",
				type: "dropdown",
				required: true,
				default: "Low",
				options: ["High", "Low"],
			},
			{
				label: "Alert Admin",
				type: "multi-checkbox",
				required: true,
				default: "Super-Admin",
				options: ["Super-Admin", "Admin", "Manager", "Developer"],
			},
		],
		tick_url: "URL for subscribing to Telex's clock.",
		target_url: "https://c3zzjvc2-3006.uks1.devtunnels.ms",
	},
};
