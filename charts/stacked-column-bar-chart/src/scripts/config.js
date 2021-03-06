define(function() {
	return {
		// Global settings
		FONT_FAMILY: "'Lato', sans-serif",
		TEXT_SIZE_SMALL: 12,

		// Spillover size
		SPILLOVER_TOP: 0.07,
		SPILLOVER_RIGHT: 0,
		SPILLOVER_BOTTOM: 0.05,
		SPILLOVER_LEFT: 0,
		
		// Layout options
		MAX_LABEL_DENSITY: 1.5, // TODO: This isn't really a density
		TOP_PADDING: 40,
		BOTTOM_PADDING: 30,
		LEFT_PADDING: 10,
		RIGHT_PADDING: 10,
		BAR_TOOLTIP_X_PADDING: 10,
		
		// Axis config
		TARGET_MARKER_COUNT: 6,
		TICK_MARK_VERTICAL_PADDING: 10,
		TICK_MARK_HORIZONTAL_PADDING: 10,
		LABEL_AXIS_PADDING: 10,
		NEGATIVE_PROPORTION_STICKY_LABELS_LIMIT: 1/3,
		
		// Tint options
		SHARED_TINT_MINIMUM_RATIO: 0.95,
		
		// Column Chart configuration
		GROUP_WIDTH_TO_PADDING_RATIO: 4,
		GROUP_PADDING_TO_BAR_PADDING_RATIO: 4,
		
		// Bar chart configuration
		BAR_MINIMUM_THICKNESS: 12,
		BAR_GROUP_TARGET_THICKNESS: 24,
		BAR_SPACING: 5,
		BAR_GROUP_WIDTH_TO_PADDING_RATIO: 4,
		
		// Key configuration
		TARGET_KEY_COLUMN_WIDTH: 200,
		KEY_MARGIN_TOP: 45,
		KEY_PADDING_TOP: 20,
		KEY_PADDING_BOTTOM: 20,
		KEY_PADDING_LEFT: 30,
		KEY_PADDING_RIGHT: 30,
		KEY_TEXT_SPACING: 5,
		KEY_COLUMN_PADDING_RATIO: 0.1,
		KEY_ROWSPACING: 8,
		KEY_SQUARE_LENGTH: 13,
		KEY_DIVIDOR_HEIGHT: 19,
		KEY_MIN_PULLOUT_TITLE_LENGTH: 4,
		KEY_MIN_WIDTH_FOR_AXIS_ALIGNMENT: 352
	}
});