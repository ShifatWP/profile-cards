import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

 registerBlockType( 'create-block/profile-card', {
    title: __('Profile Card', 'profile-cards'),
    description: __('A Profile Card Item', 'profile-cards'),
    parent: ['create-block/profile-cards'],
    icon: 'admin-users',
    supports: {
        reusable: false,
        html: false
    },
    attributes: {
        name: {
            type: "string",
            source: "html",
            selector: "h4"
        },
        bio: {
            type: "string",
            source: "html",
            selector: "p"
        }
    },
    edit:  Edit,
    save:  Save
 } );