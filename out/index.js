"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
class EntryPoint extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = () => {
            this.setState({
                count: this.state.count + 1
            });
        };
        this.state = { count: 0 };
        this.onPress = this.onPress.bind(this);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
      <react_native_1.TouchableOpacity style={styles.button} onPress={this.onPress}>
        <react_native_1.Text> Touch Here </react_native_1.Text>
      </react_native_1.TouchableOpacity>
      <react_native_1.View style={[styles.countContainer]}>
        <react_native_1.Text style={[styles.countText]}>
           {this.state.count !== 0 ? this.state.count : null}
         </react_native_1.Text>
       </react_native_1.View>
     </react_native_1.View>);
    }
}
exports.default = EntryPoint;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
});
react_native_1.AppRegistry.registerComponent(require('./../app.json').name, () => EntryPoint);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBdUg7QUFDdkgsZ0JBQWdDLFNBQVEsS0FBSyxDQUFDLFNBQVM7SUFDckQsWUFBWSxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUlQLFlBQU8sR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsQ0FBQzthQUMxQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFQQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU9NLE1BQU07UUFDWCxPQUFPLENBQ0wsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FDOUI7TUFBQSxDQUFDLCtCQUFnQixDQUNmLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDckIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUV0QjtRQUFBLENBQUMsbUJBQUksQ0FBRSxZQUFXLEVBQUUsbUJBQUksQ0FDMUI7TUFBQSxFQUFFLCtCQUFnQixDQUNsQjtNQUFBLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUNuQztRQUFBLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUM3QjtXQUFBLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUNuRDtTQUFBLEVBQUUsbUJBQUksQ0FDUjtPQUFBLEVBQUUsbUJBQUksQ0FDUjtLQUFBLEVBQUUsbUJBQUksQ0FBQyxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE3QkQsNkJBNkJDO0FBQ0QsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFBRSxFQUFFO0tBQ3RCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLFFBQVE7UUFDcEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELGNBQWMsRUFBRTtRQUNkLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE9BQU8sRUFBRSxFQUFFO0tBQ1o7SUFDRCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUMsQ0FBQTtBQUNGLDBCQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyJ9