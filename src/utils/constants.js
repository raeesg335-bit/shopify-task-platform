export const MEMBERSHIP_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    features: ['5 tasks/day', 'Basic support', 'Community access'],
    color: 'from-slate-400 to-slate-600',
    icon: '◆',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 9.99,
    features: ['25 tasks/day', 'Priority support', 'Advanced analytics'],
    color: 'from-blue-400 to-blue-600',
    icon: '★',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29.99,
    features: ['100 tasks/day', 'VIP support', 'Custom integration'],
    color: 'from-emerald-400 to-emerald-600',
    icon: '◈',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99.99,
    features: ['Unlimited tasks', '24/7 concierge', 'Enterprise features'],
    color: 'from-purple-400 to-purple-600',
    icon: '✦',
  },
];

export const NOTIFICATION_TYPES = {
  SYSTEM: 'system',
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  VIP: 'vip',
  TASK: 'task',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const VERIFICATION_STATUSES = {
  VERIFIED: 'verified',
  UNVERIFIED: 'unverified',
  PENDING: 'pending',
};

export const PAYOUT_METHODS = {
  BANK: 'bank_account',
  USDT_TRC20: 'usdt_trc20',
  USDT_ERC20: 'usdt_erc20',
};
