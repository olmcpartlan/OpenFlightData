using System;



namespace angular {
    public class ConvertDirection {
        public static string Convert(int input) {
            if(input >= 338 || input <= 22) {
                return "North";
            }
            else if(input >= 23 && input <= 68) {
                return "NorthEast";

            }
            else if(input >= 69 && input <= 113) {
                return "East";

            }
            else if(input >= 114 && input <= 158) {
                return "SouthEast";

            }
            else if(input >= 159 && input <= 203) {
                return "South";

            }
            else if(input >= 204 && input <= 248) {
                return "SouthWest";

            }
            else if(input >= 249 && input <= 293) {
                return "West";

            }
            else if(input >= 294 && input <= 337) {
                return "NorthWest";
            }
            else {
                return "error";
            }
        }
    }
}