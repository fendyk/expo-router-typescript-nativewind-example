import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center px-4">

            <View className={"grid gap-4"}>

                <View className={"p-4 border-2 border-green-400 rounded-3xl"}>
                    <Text className={"text-2xl font-bold mb-4 text-center"}>I should have a colored border with padding,
                        confirming NativeWind works 😎
                    </Text>
                </View>

                <View className={"bg-red-500 p-4 border-2 border-neutral-200 rounded-3xl"}>
                    <Text className={"text-2xl font-bold mb-4 text-center"}>I should a bg-red-500,
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

    );
}