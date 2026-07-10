import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSettings } from "../hooks/useSettings";

export default function ConfirmModal({ visible, title, message, confirmLabel, confirmColor, onConfirm, onCancel }) {
  const { t, colors } = useSettings();
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={[styles.dialog, { backgroundColor: colors.surface }]}>
          <View style={[styles.header, { backgroundColor: confirmColor ?? colors.primary }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={[styles.message, { color: colors.text }]}>{message}</Text>
          <View style={[styles.actions, { borderTopColor: colors.border }]}>
            <TouchableOpacity style={[styles.cancelButton, { borderRightColor: colors.border }]} onPress={onCancel}>
              <Text style={[styles.cancelText, { color: colors.textSecondary }]}>{t.cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.confirmButton, { backgroundColor: confirmColor ?? colors.primary }]} onPress={onConfirm}>
              <Text style={styles.confirmText}>{confirmLabel ?? t.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: 300,
    borderRadius: 14,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#9080F7',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 20,
    fontSize: 14,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 13,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
  },
  cancelText: {
    fontSize: 14,
    color: '#555',
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 13,
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
