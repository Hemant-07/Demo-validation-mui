import { DELETE_ITEM } from '../actions/ActionTypes';
const rows = [
  { id: "CW-GF-001", description:  "80outerframe",  category:"Lpvc profiles",group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6", actions: '', status: "" },
  { id:  "CW-GF-002", description : "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-003", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series", threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-004", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-005", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-006", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: null, status: "" },
  { id:  "CW-GF-007", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-008", description: "80outerframe",category:"Lpvc profiles", group:"Casement Series",threshold :"10",hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: "" },
  { id:  "CW-GF-009", description: "80outerframe",category:"Lpvc profiles",group:"Casement Series",threshold :"10" ,hsn:"60pKD2",PCS:"10",Kg:"6",profile:"6",actions: '', status: ""}
]
const initialState = {
    inventory: [], 
    row: rows
  };
  
  const inventoryReducer = (state = initialState, action) => {
    console.log(action.payload,"hemant")
   
    switch (action.type) {
      case 'ADD_ITEM':
     
        return {
          ...state,
          // inventory: [...state.inventory, action.payload],
          row: [...action.payload]
        };
      case 'UPDATEITEM':
      
        return {
          ...state,
          row: state.row.map(item =>
            item.id === action.payload.id ? action.payload : item
          ),
        };

     

      case 'DELITEM':
        // Logic to delete item from the inventory
        // Use the item's ID to filter out the corresponding item
        return {
          ...state,
          row:  [...state.row.filter(item=> ! action.payload.includes(item.id))]
          
          // row:  [...state.row.filter(item=>item.id !==action.payload.includes(item.id))]
        };

        case "ADD_ROW": 
        return{
          ...state,row:[...action.payload]
        }

        case "ADD_NEW_ITEM": 
        // return{row:[...state.row,action.payload]}
        return {
          ...state,
          row: [...state.row, action.payload],
        };
        
        case "EDIT_ITEM":
          // return{row:[...state.row,action.payload]}
          const updatedRows = state.row.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                ...action.payload,
              };
            }
            return item;
          });
          return {
            ...state,
            row: updatedRows,
          };

        // case "EDIT_ITEM":
        //   return{...state,row:[...state.row,action.payload]}
        
        // case "DELETE_ELE": 
        // return{
        //   ...state,item:action.payload
        // }

        // case "DEL": 
        // return{
        //   // ...state,row: [...state.row.filter((item)=>item.id !== action.payload)]
        // }

      default:
        return state;
    }
  };
  
  export default inventoryReducer;
  