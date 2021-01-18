export const initialState = {
    basket: [],
    reportValues : [10,20,30],
    dimensions:[1,2,3],
    user: null,
    report:null
  };
  
  // Selector
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        
        case 'EMPTY_BASKET':
        return {
            ...state,
            basket: []
        }

        case "ADD_TO_ReportValues":
        return {
            ...state,
            reportValues: [...state.reportValues, action.item],
        };

        case "ADD_TO_Dimensions":
            return {
                ...state,
                dimensions: [...state.dimensions, action.item],
            };

        case "REMOVE_FROM_ReportValues":
        const index = state.reportValues.findIndex(
            (reportValuesItem) => reportValuesItem.id === action.id
        );
        let newReportValues = [...state.reportValues];

        if (index >= 0) {
            newReportValues.splice(index, 1);

        } else {
            console.warn(
            `Cant remove product (id: ${action.id}) as its not in reportValues!`
            )
        }

        return {
            ...state,
            reportValues: newReportValues
        }

        case "EDIT_Dimensions":
            const indexD = state.dimensions.indexOf(parseInt(action.item));
            let newDimensions = [...state.dimensions];
    
            if (indexD >= 0) {
                newDimensions.splice(index1, 1);
    
            } else {
                newDimensions = [...state.dimensions,action.item]
            }
    
            return {
                ...state,
                dimensions: newDimensions
            }

        case "REMOVE_FROM_Dimensions":
            const index1 = state.dimensions.findIndex(
                (basketDimensions) => basketDimensions.id === action.id
            );
            let newDimensions1 = [...state.dimensions];
    
            if (index1 >= 0) {
                newDimensions1.splice(index1, 1);
    
            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in dimensions!`
                )
            }
    
            return {
                ...state,
                dimensions: newDimensions1
            }

            case "REMOVE_FROM_BASKET":
                const index2 = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];
        
                if (index2 >= 0) {
                    newBasket.splice(index2, 1);
        
                } else {
                    console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                    )
                }
        
                return {
                    ...state,
                    basket: newBasket
                }
        
        case "SET_USER":
        return {
            ...state,
            user: action.user
        }

        case "SET_REPORT":
            return {
                ...state,
                report: action.report
            }

        default:
        return state;
    }
};

export default reducer;