"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const main_1 = __importDefault(require("./main"));
class EntryPoint extends React.Component {
    constructor(props) {
        super(props);
        this._count = 0;
        this.Main = new main_1.default();
        this.onPress = () => {
            this.setState({
                _count: this.state._count + 1,
            });
        };
        this.state = { _count: 0 };
        this.onPress = this.onPress.bind(this);
        this.Main.publicFu();
    }
    render() {
        return (<react_native_1.View style={styles.container}>
      <react_native_1.TouchableOpacity style={styles.button} onPress={this.onPress}>
        <react_native_1.Text> Touch Here </react_native_1.Text>
      </react_native_1.TouchableOpacity>
      <react_native_1.View style={[styles.countContainer]}>
        <react_native_1.Text style={[styles.countText]}>
           {this.state._count !== 0 ? this.state._count : null}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBdUg7QUFDdkgsa0RBQTBCO0FBRTFCLGdCQUFnQyxTQUFRLEtBQUssQ0FBQyxTQUFTO0lBSXJELFlBQVksS0FBVTtRQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFKUCxXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLFNBQUksR0FBUSxJQUFJLGNBQUksRUFBRSxDQUFDO1FBU3ZCLFlBQU8sR0FBRyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQzthQUM1QixDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFUQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFHLENBQUMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBUU0sTUFBTTtRQUNYLE9BQU8sQ0FDTCxDQUFDLG1CQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUM5QjtNQUFBLENBQUMsK0JBQWdCLENBQ2YsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNyQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBRXRCO1FBQUEsQ0FBQyxtQkFBSSxDQUFFLFlBQVcsRUFBRSxtQkFBSSxDQUMxQjtNQUFBLEVBQUUsK0JBQWdCLENBQ2xCO01BQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQ25DO1FBQUEsQ0FBQyxtQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQzdCO1dBQUEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQ3JEO1NBQUEsRUFBRSxtQkFBSSxDQUNSO09BQUEsRUFBRSxtQkFBSSxDQUNSO0tBQUEsRUFBRSxtQkFBSSxDQUFDLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWxDRCw2QkFrQ0M7QUFFRCxNQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGlCQUFpQixFQUFFLEVBQUU7S0FDdEI7SUFDRCxNQUFNLEVBQUU7UUFDTixVQUFVLEVBQUUsUUFBUTtRQUNwQixlQUFlLEVBQUUsU0FBUztRQUMxQixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsVUFBVSxFQUFFLFFBQVE7UUFDcEIsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFBO0FBQ0YsMEJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDIn0=