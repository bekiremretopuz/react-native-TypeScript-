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
    render() {
        return (<react_native_1.ScrollView>
        <react_native_1.Image source={{ uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }} style={{ width: 320, height: 180 }}/>
        <react_native_1.Text>
          On, iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </react_native_1.Text>
      </react_native_1.ScrollView>);
    }
}
exports.default = EntryPoint;
react_native_1.AppRegistry.registerComponent(require('./../app.json').name, () => EntryPoint);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBb0U7QUFFcEUsZ0JBQWdDLFNBQVEsS0FBSyxDQUFDLFNBQVM7SUFDOUMsTUFBTTtRQUNYLE9BQU8sQ0FDTCxDQUFDLHlCQUFVLENBQ1Q7UUFBQSxDQUFDLG9CQUFLLENBQ0osTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsaURBQWlELEVBQUMsQ0FBQyxDQUNqRSxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBRW5DO1FBQUEsQ0FBQyxtQkFBSSxDQUNIOzs7Ozs7Ozs7UUFRRixFQUFFLG1CQUFJLENBQ1I7TUFBQSxFQUFFLHlCQUFVLENBQUMsQ0FDZCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBckJELDZCQXFCQztBQUNELDBCQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyJ9