import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';
import PagerView from "react-native-pager-view";
import {vars} from "nativewind";

export default function TabOneScreen() {

    const userTheme = vars({
        '--color-primary': '255 0 0'
    });

    return (
        <PagerView style={{flex: 1}} initialPage={0}>
            <View className="items-center justify-center px-4">
                <Text className={"text-6xl py-8"}>Borders & Backgrounds</Text>
                <Text className={"text-2xl py-8"}>Swipe left to right to see more tailwind styles!</Text>
                <View className={"grid gap-4"}>

                    <View className={"p-4 border-2 border-green-400 rounded-3xl"}>
                        <Text className={"text-2xl font-bold mb-4 text-center"}>I should have a colored border with padding,
                            confirming NativeWind works 😎
                        </Text>
                    </View>

                    <View className={"bg-red-500 p-4 border-2 border-neutral-200 rounded-3xl"}>
                        <Text className={"text-2xl font-bold mb-4 text-center"}>I should have bg-red-500,
                            but nothing happens 😥
                        </Text>
                    </View>

                    <View className={"bg-neutral-200 p-4 border-2 border-neutral-200 rounded-3xl"}>
                        <Text className={"text-2xl font-bold mb-4 text-center"}>Trying bg-neutral-200 😥
                        </Text>
                    </View>

                    <View className={"bg-purple-600 p-4 border-2 border-neutral-200 rounded-3xl"}>
                        <Text className={"text-2xl font-bold mb-4 text-center"}>Maybe bg-purple-600? 😥
                        </Text>
                    </View>

                    <View className={"bg-purple-600 p-4 border-2 border-neutral-200 rounded-3xl"}>
                        <Text className={"text-2xl font-bold mb-4 text-center text-purple-600"}>Colored text does not work either? 😥
                        </Text>
                    </View>
                </View>
            </View>
            <View className="items-center justify-center px-4 gap-4">
                <Text className={"text-4xl py-8"}>Texts & Colours</Text>
                <Text className={"text-4xl"}>I am 4xl</Text>
                <Text className={"text-5xl text-red-500"}>I should be 5xl & red-500</Text>
                <Text className={"text-5xl text-orange-500"}>I should be 5xl & orange-500</Text>
                <Text className={"text-[20px]"}>I am 20px arbitrary</Text>
                <Text className={"underline text-lg"}>I have a underline</Text>
                <Text className={"italic text-lg"}>I like pizza! (italic)</Text>
            </View>
            <View className="items-center justify-center px-4">
                <Text className={"text-4xl py-8"}>Dimensions (Width & Height)</Text>
                <View className={"border w-20 h-20 justify-center items-center"}>
                    <Text className={"text-xs"}>w-20 & h-20</Text>
                </View>
                <View className={"border w-[200px] h-[200px] bg-red-500 justify-center items-center"}>
                    <Text className={"text-xs"}>w-[200px & h-[200px] & bg-red-500</Text>
                </View>
                <View className={"border w-64 h-64 bg-purple-500 rounded-full justify-center items-center"}>
                    <Text className={"text-xs"}>w-64 & h-64 & bg-purple-500</Text>
                </View>
            </View>
            <View className="items-center justify-center px-4">
                <Text className={"text-4xl py-8"}>Variables</Text>
                <Text className={"text-lg text-[--color-primary]"}>This should be a primary colour</Text>
                <View className={"border-2 w-full"}>
                    <Text className={"text-base bg-[--color-primary] text-center"}>I should have a primary background</Text>
                </View>
            </View>
        </PagerView>

    );
}