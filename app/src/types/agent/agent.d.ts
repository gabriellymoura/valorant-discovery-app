type Agent = {
  name: string;
  agentImage: string;
  ability?: Abilities;
  role: Role;
  description: string;
};

type Abilities = Array<Ability>;

type Ability = { name: string; description: string; icon: string };

type Role = {
  name: string;
  displayIcon: string;
};
