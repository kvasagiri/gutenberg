/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

export const G = ( props ) => createElement( 'g', props );
export const Path = ( props ) => createElement( 'path', props );
export const Polygon = ( props ) => createElement( 'polygon', props );

export const SVG = ( props ) => {
	const appliedProps = {
		...props,
		role: 'img',
		'aria-hidden': 'true',
		focusable: 'false',
	};

	return <svg { ...appliedProps } />;
};
