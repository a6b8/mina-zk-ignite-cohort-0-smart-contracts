import { Field, SmartContract, State, DeployArgs, PublicKey, Signature, PrivateKey } from 'snarkyjs';
export declare class OracleExample extends SmartContract {
    oraclePublicKey: State<PublicKey>;
    events: {
        verified: typeof Field;
    };
    deploy(args: DeployArgs): void;
    init(zkappKey: PrivateKey): void;
    verify(id: Field, points: Field, signature: Signature, salt: Field): void;
}
