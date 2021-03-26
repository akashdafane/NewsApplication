import toast from 'react-hot-toast';

// import { useDispatch, useSelector } from 'react-redux';
// import Input from '../Components/Common/Input';
// import _ from 'lodash';
// import Button from './Common/Button';
// import { sortByAsc, sortByDesc } from '../actions/actionType';
// import { fetchUserAction } from '../actions/fetchUserAction';
// import { item } from '../actions/actionType';
// import Pagination from '@material-ui/lab/Pagination';
// import ReactPaginate from 'react-paginate';



const showToast = (message) => {
    toast.remove();
    message &&
      toast(message, {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
  };
 
 function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    });
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    });
}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}


const average = (subjects) => {
    var sum = 0;
    subjects.forEach((sub) => (sum = sum + sub.mark));
    return sum / subjects.length;
};


const addition = (subjects) => {
    var sum = 0;
    subjects.forEach((sub) => (sum = sum + sub.mark));
    return sum
};

const testing = () => {
    console.log("testing")
}




// export const getMax = (arr, prop) => {
//     var max;
//     for (var i=0 ; i<arr.length ; i++) {
//         if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
//             max = arr[i];
//     }
//     return max;
// }
// const sortAsc = (FilterData) => {
//     var temp1 = _.sortBy(FilterData, ['title'])
//     dispatch(sortByAsc(temp1))
//   };

export {
    sortAsc,
    sortDesc,
    addFilterIfNotExists,
    removeFilter,
    average,
    addition,
    showToast,
    testing,
    // sortAsc
}