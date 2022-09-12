class algoritmns{
    public static void main(String [] arg){
        
        // the array must be sorted from lower to greater value
        int[] exampleArray = {1,4,5,6,7,8,10,11,45};
        // define the end value that in this case will be the lenght of the array - 1
        int n= exampleArray.length - 1;
        // define the value to search
        int find = 68;
        int result = binarySearch(exampleArray, find, 0, n);
        if(result ==  -1){

            System.out.println("no se ha encontrado nada");
        }
        else{
            System.err.println("el valor buscado esta en el indice: " + result);
        }
    }

    // For binary search we have to consider that the array we are searching has to be sorted

    public static int binarySearch(int [] arr, int x, int begin, int end){

        if(end >= 1){
            
            // we need to pass values of the middle of the array and the begind and end
            
            
            // middle is calculated
            int middle = (begin + end)/2;

            // we return the current value if it matches 
            if(arr[middle] == x) return middle;

            // if the middle value is gratter than the searched value we chop the array in half
            if(arr[middle] > x){
                return binarySearch(arr, x, begin, middle -1);
            }
            // considering that if the value is greatter that x, we have to take the left side of it
            // beacuase the value we search is located in the left side
            
            return binarySearch(arr, x, middle + 1, end);  
            // in other case we have to return the other side if the middle value is lower than x
        }

        // if we have not found the x value we just return null
        return -1;
    } 

}