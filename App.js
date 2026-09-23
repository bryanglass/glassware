// GLASSWARE v1.0 — SDK 57 TARGET
// Expo SDK: 57
// React Native: 0.86
// NOTE: In Snack, set the project SDK to 57.0.0 and allow Snack to
// resolve the SDK-57-compatible Expo dependencies.
// Application logic preserved from the supplied working source.

 //save_bmg
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { logEvent } from './logger';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [image, setImage] = useState(null);
  const [mode, setMode] = useState(null);
  const [language, setLanguage] = useState('en');
  const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    logEvent('BEO image selected');

    setImage(result.assets[0].uri);
    setScreen('processing');
  }
};

const pickSpreadsheet = async () => {

  logEvent('Dining room operational sheet selected');

  setScreen('processing');

};

  useEffect(() => {
    if (screen === 'processing') {
		logEvent('Operational translation started');
      const timer = setTimeout(() => {
		  logEvent('Operational whiteboard generated');
        setScreen('result');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [screen]);

  // HOME SCREEN
  if (screen === 'home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Glassware</Text>

        <Text style={styles.subtitle}>
          {language === 'en'
            ? 'A new way to see guest services'
            : 'Una nueva forma de ver los servicios al huésped'}
        </Text>

        {/* ENG / ESP language control */}
        <View style={styles.languageContainer}>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => setLanguage(prev => prev === 'en' ? 'es' : 'en')}
            accessibilityLabel={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            accessibilityHint="Switch app language"
          >
            <Text style={styles.languageLabel}>
              {language === 'en' ? 'ESP' : 'ENG'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ratchet / future settings control */}
        <View style={styles.ratchetContainer}>
          <TouchableOpacity
            style={styles.ratchetButton}
            accessibilityLabel="Ratchet"
            accessibilityHint="Settings control placeholder"
          >
            <MaterialCommunityIcons
              name="wrench-outline"
              size={30}
              color="#E8FF65"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('whiteboardSelect')}
        >
          <Text style={styles.buttonText}>
            {language === 'en' ? 'SLAYER' : 'SLAYER in ESP'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pickSpreadsheet}
        >
          <Text style={styles.buttonText}>
            {language === 'en' ? 'FIRE Runbooks' : 'FIRE Guías'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
        >
          <Text style={styles.buttonText}>
            {language === 'en' ? 'FIRE Inventory' : 'FIRE Carteleras'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // PROCESSING SCREEN
  if (screen === 'processing') {
    return (
      <View style={styles.container}>
        <Text style={styles.processingTitle}>
  {mode === 'banquet'
    ? 'Generating BEO Whiteboard...'
    : 'Generating Dining Room Whiteboard'}
</Text>

        {mode === 'banquet' ? (
  <>
    <Text style={styles.processingText}>
      Reading BEO...
    </Text>

    <Text style={styles.processingText}>
      Structuring Event Services...
    </Text>

    <Text style={styles.processingText}>
      Rendering Timeline...
    </Text>
	
	
  </>
) : (
  <>
    <Text style={styles.processingText}>
      Reading MOD Service Chart...
    </Text>

    <Text style={styles.processingText}>
      Importing reservations from OpenTable...
    </Text>

    <Text style={styles.processingText}>
      Importing data from Toast...
    </Text>

        
  </>
)}

    </View>
  );
}
  
// WHITEBOARD SELECT SCREEN
if (screen === 'whiteboardSelect') {
  return (
    <View style={styles.container}>

      <Text style={styles.processingTitle}>
        Select Service
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setMode('banquet');
          pickImage();
        }}
      >
        <Text style={styles.buttonText}>
          Banquet / BEO
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setMode('dining');
          pickImage();
        }}
      >
        <Text style={styles.buttonText}>
          Dining Room
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setScreen('home')}
      >
        <Text style={styles.backButtonText}>
          BACK
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// RESULT SCREEN

if (mode === 'dining') {

  return (
    <ScrollView style={styles.resultContainer}>

      <View style={styles.topBar}>
        <Text style={styles.resultHeader}>
          DINING ROOM May 20, 2026 
        </Text>

        <Text style={styles.revision}>
          LIVE SHIFT
        </Text>
      </View>

      <View style={styles.countCard}>
        <Text style={styles.countLabel}>
          TEAM FOCUS
        </Text>

        <Text style={styles.countNumber}>
          GUEST
        </Text>

        <Text style={styles.guestSub}>
          right-of-way
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>
          CHEF FEATURES
        </Text>

        <Text style={styles.timelineItem}>
          • OYSTERS
        </Text>

        <Text style={styles.timelineItem}>
          • EAST - BOSTON, MA
        </Text>

        <Text style={styles.timelineItem}>
          • WEST - ROYAL MIYAGI, CANADA
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>
          MIXOLOGY
        </Text>

        <Text style={styles.timelineItem}>
          • DIRTYWEST MARTINI
        </Text>
      </View>

      <View style={styles.alertCard}>
        <Text style={styles.alertHeader}>
          86 LIST
        </Text>

        <Text style={styles.alert}>
          DIET COKE
        </Text>

        <Text style={styles.alert}>
          BODY SNAPPER
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>
          OPENING TASKS
        </Text>

        <Text style={styles.timelineItem}>
          • SETUP BREAD STATION
        </Text>

        <Text style={styles.timelineItem}>
          • BREW COFFEE
        </Text>

        <Text style={styles.timelineItem}>
          • REFILL CASTLES
        </Text>

        <Text style={styles.timelineItem}>
          • STOCK ICE
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>
          SHIFT TASKS
        </Text>

        <Text style={styles.timelineItem}>
          • SILVERWARE 40
        </Text>

        <Text style={styles.timelineItem}>
          • RAMEKINS 20
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('home')}
      >
        <Text style={styles.buttonText}>
          BACK
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

// BANQUET RESULT SCREEN
return (
  <ScrollView style={styles.resultContainer}>

    <View style={styles.topBar}>

  <View>

    <Text style={styles.resultHeader}>
      RPT#6524
    </Text>

    <Text style={styles.revision}>
      GRAND BALLROOM
    </Text>

    <Text style={styles.revision}>
      06/18/2026 • 12:00 PM
    </Text>

<Text style={styles.revision}>
      Coordinator/Planner: Brittany's Brides

    </Text>

  </View>

</View>

    <View style={styles.countCard}>

<View style={styles.countCard}>

  <Text style={styles.countLabel}>
    HEADCOUNT
  </Text>

  <Text style={styles.countNumber}>
    238
  </Text>

  <Text style={styles.guestSub}>
    DINNER SERVICE: BUFFET
  </Text>

  <Text style={styles.guestSub}>
    BEVERAGE SERVICE: PREMIUM BAR / COFFEE
  </Text>

  <Text style={styles.guestSub}>
    WINE: CHARDONNAY / CABERNET
  </Text>

</View>
</View>

<View style={styles.alertCard}>
      <Text style={styles.alertHeader}>
        ALERTS
      </Text>

      <Text style={styles.alert}>
        VALET $8 SELF PARK LIMITED
      </Text>

      <Text style={styles.alert}>
        1 CHILD MEALS (LG ranch plz)
      </Text>

      <Text style={styles.alert}>
        3 VEG MEALS
      </Text>

      <Text style={styles.alert}>
        Guest requests DESSERT AT 1400, no later
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.sectionHeader}>
        SERVICE FLOW
      </Text>

      <Text style={styles.timelineItem}>
        1200  GUEST ARRIVAL
      </Text>

      <Text style={styles.timelineItem}>
        1300  BUFFET READY
      </Text>

      <Text style={styles.timelineItem}>
        1400  DESSERT SERVICE
      </Text>

      <Text style={styles.timelineItem}>
        1500  EVENT END
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.sectionHeader}>
        MENU
      </Text>

      <Text style={styles.timelineItem}>
        • CLASSIC CAESAR
      </Text>

      <Text style={styles.timelineItem}>
        • VEGETABLE MEDLEY
      </Text>

      <Text style={styles.timelineItem}>
        • SCAMPI PASTA
      </Text>

      <Text style={styles.timelineItem}>
        • BOURBON CHICKEN
      </Text>

      <Text style={styles.timelineItem}>
        • CARVED FLAT IRON
      </Text>

      <Text style={styles.timelineItem}>
        • CHEF DESSERT
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.sectionHeader}>
        SETUP SUMMARY
      </Text>

      <Text style={styles.timelineItem}>
        • GRAND BALLROOM
      </Text>

      <Text style={styles.timelineItem}>
        • BUFFET: WEST WALL
      </Text>

      <Text style={styles.timelineItem}>
        • 26 ROUND TABLES (10 RED, 10 YELLOW, 6 GREEN)
      </Text>

      <Text style={styles.timelineItem}>
        • 2 8ft TABLES (buffet)
      </Text>

      <Text style={styles.timelineItem}>
        • 2 6ft TABLES (bev/dessert)
      </Text>

      <Text style={styles.timelineItem}>
        • WHITE LINEN
      </Text>

      <Text style={styles.timelineItem}>
        • HOUSE CHAIRS
      </Text>

    </View>

    <TouchableOpacity
      style={styles.button}
      onPress={() => setScreen('home')}
    >
      <Text style={styles.buttonText}>
        BACK
      </Text>
    </TouchableOpacity>

    <View style={{ height: 40 }} />

  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12091F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 46,
    fontWeight: '800',
    color: '#E8FF65',
    marginBottom: 14,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 18,
    color: '#D7C8F3',
    textAlign: 'center',
    marginBottom: 42,
    lineHeight: 26,
  },

  languageContainer: {
    position: 'absolute',
    left: 18,
    bottom: 18,
    alignItems: 'center',
  },

  languageButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#7A5FA3',
    backgroundColor: '#241238',
    alignItems: 'center',
    justifyContent: 'center',
  },

  languageLabel: {
    fontSize: 13,
    fontWeight: '900',
    color: '#E8FF65',
    letterSpacing: 0.5,
  },

 ratchetContainer: {
  position: 'absolute',
  right: 18,
  bottom: 18,
  alignItems: 'center',
},

  ratchetButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#7A5FA3',
    backgroundColor: '#241238',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#B026FF',
    paddingVertical: 18,
    paddingHorizontal: 34,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20,

    shadowColor: '#B026FF',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  processingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#E8FF65',
    marginBottom: 34,
    textAlign: 'center',
  },

  processingText: {
    fontSize: 18,
    color: '#D7C8F3',
    marginBottom: 14,
  },

  resultContainer: {
    flex: 1,
    backgroundColor: '#12091F',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  resultHeader: {
    fontSize: 30,
    fontWeight: '800',
    color: '#E8FF65',
    letterSpacing: 1,
  },

  revision: {
    fontSize: 12,
    color: '#A88ED6',
    fontWeight: '700',
  },

  heroCard: {
    backgroundColor: '#241238',
    borderRadius: 24,
    padding: 28,
    marginBottom: 22,

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  guestCard: {
    backgroundColor: '#B026FF',
    borderRadius: 24,
    padding: 28,
    marginBottom: 22,
    alignItems: 'center',

    shadowColor: '#B026FF',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  card: {
    backgroundColor: '#241238',
    borderRadius: 22,
    padding: 24,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  cardTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 12,
    color: '#FFFFFF',
  },

  cardText: {
    fontSize: 17,
    marginBottom: 8,
    color: '#D7C8F3',
    lineHeight: 24,
  },

  sectionHeader: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
    color: '#E8FF65',
    letterSpacing: 0.5,
  },

  bigNumber: {
    fontSize: 72,
    fontWeight: '900',
    color: '#E8FF65',
  },

  guestSub: {
    color: '#F3EAFF',
    fontSize: 16,
    marginTop: 6,
    fontWeight: '600',
  },

  timelineBar: {
    height: 8,
    backgroundColor: '#E8FF65',
    borderRadius: 10,
    marginBottom: 20,
  },

  timelineItem: {
    fontSize: 16,
    marginBottom: 12,
    color: '#F1ECFF',
    lineHeight: 22,
  },

  alertCard: {
    backgroundColor: '#2B1236',
    borderWidth: 2,
    borderColor: '#E8FF65',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,

    shadowColor: '#E8FF65',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    elevation: 3,
  },

  alertHeader: {
    fontSize: 22,
    fontWeight: '800',
    color: '#E8FF65',
    marginBottom: 16,
  },

  alert: {
    fontSize: 16,
    marginBottom: 10,
    color: '#F5FF9A',
    fontWeight: '700',
    lineHeight: 22,
  },

  compactStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#241238',
    borderRadius: 14,
  },

  stripText: {
    color: '#E8FF65',
    fontSize: 13,
    fontWeight: '700',
  },

  stripDivider: {
    color: '#7A5FA3',
    marginHorizontal: 8,
    fontWeight: '700',
  },

  countCard: {
    backgroundColor: '#241238',
    borderRadius: 16,
    paddingVertical: 14,
    marginBottom: 18,
    alignItems: 'center',
  },

  countLabel: {
    color: '#A88ED6',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 1,
  },

  countNumber: {
    color: '#E8FF65',
    fontSize: 42,
    fontWeight: '900',
  },

  backButton: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  backButtonText: {
    color: '#A88ED6',
    fontSize: 16,
    fontWeight: '700',
  },
});