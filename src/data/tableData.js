import Chip from '../components/Chip';
import Slider from '../components/slider/Slider';

export const columnDefinitions = [
    {
        label: 'Viewed',
        field: 'viewed',
        renderer: ({ rowData }) => <div className="dot" style={{ color: rowData?.viewed ? 'blue' : 'gray'}}>&#8226;</div>,
        headerCellStyle: {
            width: '14%',
            textAlign: 'center',
        },
    },
    {
        label: 'Title',
        field: 'title',
        labelRenderer:() => <label style={{fontSize:'60px'}}>Title</label>,
        rowCellStyle: {
            fontSize: '60px',
            fontFamily: 'Akkurat-Light',
        },
    },
    {
        label: 'Artist Name',
        field: 'artist',
        rowCellStyle:{
            width: '10%'
        }
    },
    {
        label: '',
        field: 'tags',
        labelRenderer: ({ setChipFilters, chipFilters }) => <Slider setChipFilters={setChipFilters} chipFilters={chipFilters} />,
        renderer: (props) => {
            if (!props.value?.length) {
                return <Chip variant='add' />;
            }
            return (
                <div style={{ display: 'flex' }}>
                    {props.value.map((tag, index) => (
                        <Chip key={index} color={tag} />
                    ))}
                </div>
            );
        },
    },
];

export const tableData = [
    {
        id: 'c6c62d7c-7261-11ee-b962-0242ac120002',
        title: 'QUEENDOM',
        artist: 'Ilit Azouly',
        viewed: false,
        // tags: ['pink', 'green', 'red'],
    },
    {
        id: 'cf57b050-7261-11ee-b962-0242ac120002',
        title: 'For Love of Sustainability: Post-Painterly Art of Progress',
        artist: 'Sharon Jacobs',
        viewed: false,
        tags: ['blue', 'gray', 'red'],
    },
    {
        id: 'daec2bda-7261-11ee-b962-0242ac120002',
        title: 'The Bureaucracies of Gaming? A Juried Show of Damage',
        artist: 'Joyce Burns',
        viewed: false,
        tags: ['blue', 'gray'],
    },
    {
        id: 'e171bede-7261-11ee-b962-0242ac120002',
        title: 'Remixing (Im)Possibilities: Media Art and the Local',
        artist: 'Luis Adkins',
        viewed: false,
        tags: [],
    },
    {
        id: 'e5b3273a-7261-11ee-b962-0242ac120002',
        title: 'Apposite Ground: Locality and Dysfunction',
        artist: 'Ilit Azouly',
        viewed: false,
        tags: ['red'],
    },

    {
        id: 'ed419446-7261-11ee-b962-0242ac120002',
        title: 'In Search of Media: Daring to Defy Too Many Dinner Parties',
        artist: 'Janice Gonzales',
        viewed: false,
        tags: ['pink', 'green', 'blue', 'gray', 'red'],
    },

    {
        id: 'f25e4c08-7261-11ee-b962-0242ac120002',
        title: 'Relational Extravaganza: The Politics of Progress',
        artist: 'Jaime Bennett',
        viewed: true,
        tags: ['pink'],
    },

    {
        id: 'f80f271c-7261-11ee-b962-0242ac120002',
        title: 'An Overwhelming Gaming: Post-Painterly Art of Urban Experience',
        artist: 'Joyce Burns',
        viewed: false,
        tags: ['pink', 'red'],
    },
    {
        id: '03e98e60-7262-11ee-b962-0242ac120002',
        title: 'After the Banality: Daring to Defy Too Many Dinner Parties',
        artist: 'Ilit Azouly',
        viewed: false,
        tags: ['blue', 'gray', 'red'],
    },
    {
        id: 'fea7176a-7261-11ee-b962-0242ac120002C',
        title: 'Mediating Dilettantes: A Remix of Misfortune',
        artist: 'Claudia Perkins',
        viewed: true,
        tags: ['pink', 'green', 'blue'],
    },
];
