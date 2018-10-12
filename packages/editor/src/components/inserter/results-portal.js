/**
 * WordPress dependencies
 */
import { createSlotFill, PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import InserterList from '../inserter-list';
import { searchItems } from './menu';

const { Fill, Slot } = createSlotFill( 'InserterResultsPortal' );

const InserterResultsPortal = ( { items, title, onSelect, onHover, ...props } ) => {
	return (
		<Fill>
			{ ( { filterValue } ) => {
				const filteredItems = searchItems( items, filterValue );

				if ( ! filteredItems.length ) {
					return null;
				}

				return (
					<PanelBody
						title={ title }
						{ ...props }
						className="editor-inserter__results-portal"
					>
						<InserterList items={ filteredItems } onSelect={ onSelect } onHover={ onHover } />
					</PanelBody>
				);
			} }
		</Fill>
	);
};

InserterResultsPortal.Slot = Slot;

export default InserterResultsPortal;
