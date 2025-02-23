import { TableView } from "@gkasdorf/react-native-tableview-simple";
import { Box, HStack, ScrollView, Text, View, useTheme } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { setSetting } from "../../../../slices/settings/settingsActions";
import { selectSettings } from "../../../../slices/settings/settingsSlice";
import {
  DarkThemeOptionsArr,
  LightThemeOptionsArr,
  ThemeOptionsMap,
} from "../../../../theme/themeOptions";
import CCell from "../../../common/Table/CCell";
import CSection from "../../../common/Table/CSection";
import SFIcon from "../../../common/icons/SFIcon";

function ThemeColors({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Box borderRadius={5} overflow="hidden">
      <Box
        style={{
          width: 25,
          height: 25,
          backgroundColor: bg,
        }}
      >
        <Box
          style={{
            width: 0,
            height: 0,
            borderTopColor: accent,
            borderTopWidth: 25,
            borderRightWidth: 25,
            borderRightColor: "transparent",
          }}
        />
      </Box>
    </Box>
  );
}

interface IProps {
  route: any;
}

function ThemeSelectionScreen({ route }: IProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const themeProp = route.params?.themeProp || "theme";

  const settings = useAppSelector(selectSettings);
  const currentTheme = settings[themeProp];

  return (
    <View backgroundColor={theme.colors.app.bg} flex={1}>
      <ScrollView backgroundColor={theme.colors.app.bg} flex={1}>
        <TableView style={styles.table}>
          <CSection header={t("settings.appearance.themes.light")}>
            {LightThemeOptionsArr.map((themeName) => (
              <CCell
                key={themeName}
                cellStyle="RightDetail"
                title={
                  <HStack space={2}>
                    <ThemeColors
                      accent={ThemeOptionsMap[themeName].colors.app.accent}
                      bg={ThemeOptionsMap[themeName].colors.app.bg}
                    />
                    <Text>{themeName}</Text>
                  </HStack>
                }
                cellAccessoryView={
                  currentTheme === themeName && (
                    <SFIcon icon="checkmark" size={12} />
                  )
                }
                onPress={() => {
                  const themeSetting = {};
                  themeSetting[themeProp] = themeName;
                  dispatch(setSetting(themeSetting));
                }}
              />
            ))}
          </CSection>
          <CSection header={t("settings.appearance.themes.dark")}>
            {DarkThemeOptionsArr.map((themeName) => (
              <CCell
                key={themeName}
                cellStyle="RightDetail"
                title={
                  <HStack space={2}>
                    <ThemeColors
                      accent={ThemeOptionsMap[themeName].colors.app.accent}
                      bg={ThemeOptionsMap[themeName].colors.app.bg}
                    />
                    <Text>{themeName}</Text>
                  </HStack>
                }
                cellAccessoryView={
                  currentTheme === themeName && (
                    <SFIcon icon="checkmark" size={12} />
                  )
                }
                onPress={() => {
                  const themeSetting = {};
                  themeSetting[themeProp] = themeName;
                  dispatch(setSetting(themeSetting));
                }}
              >
                {themeName === "Sunset" ? (
                  <Text
                    ml={4}
                    mb={2}
                    mt={-3}
                    fontSize="xs"
                    color={theme.colors.app.textSecondary}
                  >
                    Inspired by the Sunset Theme from Apollo (Christian Selig)
                  </Text>
                ) : null}
              </CCell>
            ))}
          </CSection>
        </TableView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginHorizontal: 15,
  },
});

export default ThemeSelectionScreen;
