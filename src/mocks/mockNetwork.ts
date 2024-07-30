export const mockNetwork = [
  {
    id: "48d6023c46a88b09",
    type: "Network",
    clock: 1722358102216,
    config: {
      authTokens: null,
      creationTime: 1722339050036,
      capabilities: [],
      enableBroadcast: true,
      id: "48d6023c46a88b09",
      ipAssignmentPools: [
        {
          ipRangeStart: "192.168.192.1",
          ipRangeEnd: "192.168.192.254",
        },
      ],
      lastModified: 0,
      mtu: 2800,
      multicastLimit: 32,
      name: "sleepy_hayes",
      private: false,
      remoteTraceLevel: 0,
      remoteTraceTarget: null,
      routes: [
        {
          target: "192.168.192.0/24",
        },
      ],
      rules: [
        {
          etherType: 2048,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 2054,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 34525,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          type: "ACTION_DROP",
        },
        {
          type: "ACTION_ACCEPT",
        },
      ],
      tags: [],
      v4AssignMode: {
        zt: true,
      },
      v6AssignMode: {
        "6plane": false,
        rfc4193: false,
        zt: false,
      },
      dns: {
        domain: "",
        servers: null,
      },
      ssoConfig: {
        enabled: false,
        mode: "standard",
      },
    },
    description: "",
    rulesSource:
      "#\n# This is a default rule set that allows IPv4 and IPv6 traffic but otherwise\n# behaves like a standard Ethernet switch:\n\ndrop\n\tnot ethertype ipv4\n\tand not ethertype arp\n\tand not ethertype ipv6\n;\n\n# Accept anything else. This is required since default is 'drop':\n\naccept;\n\n# For more information on how rules work visit: https://docs.zerotier.com/rules/\n",
    permissions: null,
    ownerId: "e02accac-9028-4391-83b0-da9782ca3124",
    onlineMemberCount: 0,
    authorizedMemberCount: 0,
    totalMemberCount: 0,
    capabilitiesByName: {},
    tagsByName: {},
    ui: null,
  },
  {
    id: "fada62b01521c98d",
    type: "Network",
    clock: 1722358102216,
    config: {
      authTokens: null,
      creationTime: 1722339048469,
      capabilities: [],
      enableBroadcast: true,
      id: "fada62b01521c98d",
      ipAssignmentPools: [
        {
          ipRangeStart: "10.144.0.1",
          ipRangeEnd: "10.144.255.254",
        },
      ],
      lastModified: 0,
      mtu: 2800,
      multicastLimit: 32,
      name: "angry_tattam",
      private: true,
      remoteTraceLevel: 0,
      remoteTraceTarget: null,
      routes: [
        {
          target: "10.144.0.0/16",
        },
      ],
      rules: [
        {
          etherType: 2048,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 2054,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 34525,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          type: "ACTION_DROP",
        },
        {
          type: "ACTION_ACCEPT",
        },
      ],
      tags: [],
      v4AssignMode: {
        zt: true,
      },
      v6AssignMode: {
        "6plane": false,
        rfc4193: false,
        zt: false,
      },
      dns: {
        domain: "",
        servers: null,
      },
      ssoConfig: {
        enabled: false,
        mode: "standard",
      },
    },
    description: "",
    rulesSource:
      "#\n# This is a default rule set that allows IPv4 and IPv6 traffic but otherwise\n# behaves like a standard Ethernet switch:\n\ndrop\n\tnot ethertype ipv4\n\tand not ethertype arp\n\tand not ethertype ipv6\n;\n\n# Accept anything else. This is required since default is 'drop':\n\naccept;\n\n# For more information on how rules work visit: https://docs.zerotier.com/rules/\n",
    permissions: null,
    ownerId: "e02accac-9028-4391-83b0-da9782ca3124",
    onlineMemberCount: 0,
    authorizedMemberCount: 0,
    totalMemberCount: 0,
    capabilitiesByName: {},
    tagsByName: {},
    ui: null,
  },
  {
    id: "12ac4a1e717613a1",
    type: "Network",
    clock: 1722358102216,
    config: {
      authTokens: null,
      creationTime: 1722339047647,
      capabilities: [],
      enableBroadcast: true,
      id: "12ac4a1e717613a1",
      ipAssignmentPools: [
        {
          ipRangeStart: "10.147.19.1",
          ipRangeEnd: "10.147.19.254",
        },
      ],
      lastModified: 0,
      mtu: 2800,
      multicastLimit: 32,
      name: "admiring_shockley",
      private: true,
      remoteTraceLevel: 0,
      remoteTraceTarget: null,
      routes: [
        {
          target: "10.147.19.0/24",
        },
      ],
      rules: [
        {
          etherType: 2048,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 2054,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 34525,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          type: "ACTION_DROP",
        },
        {
          type: "ACTION_ACCEPT",
        },
      ],
      tags: [],
      v4AssignMode: {
        zt: true,
      },
      v6AssignMode: {
        "6plane": false,
        rfc4193: false,
        zt: false,
      },
      dns: {
        domain: "",
        servers: null,
      },
      ssoConfig: {
        enabled: false,
        mode: "standard",
      },
    },
    description: "",
    rulesSource:
      "#\n# This is a default rule set that allows IPv4 and IPv6 traffic but otherwise\n# behaves like a standard Ethernet switch:\n\ndrop\n\tnot ethertype ipv4\n\tand not ethertype arp\n\tand not ethertype ipv6\n;\n\n# Accept anything else. This is required since default is 'drop':\n\naccept;\n\n# For more information on how rules work visit: https://docs.zerotier.com/rules/\n",
    permissions: null,
    ownerId: "e02accac-9028-4391-83b0-da9782ca3124",
    onlineMemberCount: 0,
    authorizedMemberCount: 0,
    totalMemberCount: 0,
    capabilitiesByName: {},
    tagsByName: {},
    ui: null,
  },
  {
    id: "1c33c1ced0b1069a",
    type: "Network",
    clock: 1722358102216,
    config: {
      authTokens: null,
      creationTime: 1722339046765,
      capabilities: [],
      enableBroadcast: true,
      id: "1c33c1ced0b1069a",
      ipAssignmentPools: [
        {
          ipRangeStart: "10.147.20.1",
          ipRangeEnd: "10.147.20.254",
        },
      ],
      lastModified: 0,
      mtu: 2800,
      multicastLimit: 32,
      name: "hopeful_lipkin",
      private: true,
      remoteTraceLevel: 0,
      remoteTraceTarget: null,
      routes: [
        {
          target: "10.147.20.0/24",
        },
      ],
      rules: [
        {
          etherType: 2048,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 2054,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 34525,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          type: "ACTION_DROP",
        },
        {
          type: "ACTION_ACCEPT",
        },
      ],
      tags: [],
      v4AssignMode: {
        zt: true,
      },
      v6AssignMode: {
        "6plane": false,
        rfc4193: false,
        zt: false,
      },
      dns: {
        domain: "",
        servers: null,
      },
      ssoConfig: {
        enabled: false,
        mode: "standard",
      },
    },
    description: "",
    rulesSource:
      "#\n# This is a default rule set that allows IPv4 and IPv6 traffic but otherwise\n# behaves like a standard Ethernet switch:\n\ndrop\n\tnot ethertype ipv4\n\tand not ethertype arp\n\tand not ethertype ipv6\n;\n\n# Accept anything else. This is required since default is 'drop':\n\naccept;\n\n# For more information on how rules work visit: https://docs.zerotier.com/rules/\n",
    permissions: null,
    ownerId: "e02accac-9028-4391-83b0-da9782ca3124",
    onlineMemberCount: 0,
    authorizedMemberCount: 0,
    totalMemberCount: 0,
    capabilitiesByName: {},
    tagsByName: {},
    ui: null,
  },
  {
    id: "e4da7455b25e0f1b",
    type: "Network",
    clock: 1722358102216,
    config: {
      authTokens: null,
      creationTime: 1722339042291,
      capabilities: [],
      enableBroadcast: true,
      id: "e4da7455b25e0f1b",
      ipAssignmentPools: [
        {
          ipRangeStart: "192.168.196.1",
          ipRangeEnd: "192.168.196.254",
        },
      ],
      lastModified: 0,
      mtu: 2800,
      multicastLimit: 32,
      name: "tiny_meucci",
      private: true,
      remoteTraceLevel: 0,
      remoteTraceTarget: null,
      routes: [
        {
          target: "192.168.196.0/24",
        },
      ],
      rules: [
        {
          etherType: 2048,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 2054,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          etherType: 34525,
          not: true,
          or: false,
          type: "MATCH_ETHERTYPE",
        },
        {
          type: "ACTION_DROP",
        },
        {
          type: "ACTION_ACCEPT",
        },
      ],
      tags: [],
      v4AssignMode: {
        zt: true,
      },
      v6AssignMode: {
        "6plane": false,
        rfc4193: false,
        zt: false,
      },
      dns: {
        domain: "",
        servers: null,
      },
      ssoConfig: {
        enabled: false,
        mode: "standard",
      },
    },
    description: "",
    rulesSource:
      "#\n# This is a default rule set that allows IPv4 and IPv6 traffic but otherwise\n# behaves like a standard Ethernet switch:\n\ndrop\n\tnot ethertype ipv4\n\tand not ethertype arp\n\tand not ethertype ipv6\n;\n\n# Accept anything else. This is required since default is 'drop':\n\naccept;\n\n# For more information on how rules work visit: https://docs.zerotier.com/rules/\n",
    permissions: null,
    ownerId: "e02accac-9028-4391-83b0-da9782ca3124",
    onlineMemberCount: 0,
    authorizedMemberCount: 0,
    totalMemberCount: 0,
    capabilitiesByName: {},
    tagsByName: {},
    ui: null,
  },
];
