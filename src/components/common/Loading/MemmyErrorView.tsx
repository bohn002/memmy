import React from "react";
import { Text, useTheme, VStack } from "native-base";
import { Button } from "react-native";
import { IconMoodSad } from "tabler-icons-react-native";
import { useTranslation } from "react-i18next";
import { sendLog } from "../../../helpers/LogHelper";

function MemmyErrorView() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <VStack
      flex={1}
      px={3}
      justifyContent="center"
      alignItems="center"
      backgroundColor="app.bg"
      space={2}
    >
      <IconMoodSad size={150} color={theme.colors.app.textSecondary} />
      <Text textAlign="center">{t("memmyError.title")}</Text>
      <Text textAlign="center">{t("memmyError.description")}</Text>
      <Button title={t("memmyError.submitBtn")} onPress={() => sendLog()} />
    </VStack>
  );
}

export default MemmyErrorView;
