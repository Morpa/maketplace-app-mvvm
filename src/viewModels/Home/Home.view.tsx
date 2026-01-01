import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"

export const HomveView = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  )
}
