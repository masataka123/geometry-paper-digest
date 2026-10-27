---
layout: paper
title: Yang-Mills-Higgs Limits of Reflexive Higgs Sheaves
title_ja: 反射的Higgs層のYang–Mills–Higgs流の極限
authors: Tianshu Jiang, Yijian Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: For stable Higgs bundles, Hermitian-Einstein metrics can be obtained as limits of the Yang-Mills-Higgs (Y-M-H) flow. We study the algebraic structure of subsequential limits of this flow for reflexive Higgs sheaves over compact K\"ahler manifolds, without assuming stability. We prove that the limiting reflexive Higgs sheaf is isomorphic to the double dual of the graded sheaf associated with the Harder-Narasimhan-Seshadri filtration of the initial sheaf.
topic: differential-geometry
tags:
- higgs-nonabelian-hodge
- stability
- vector-bundles-sheaves
- hermite-einstein-metrics
arxiv_id: 2610.35742v1
arxiv_url: https://arxiv.org/abs/2610.35742
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: コンパクトKähler多様体上の反射的Higgs層について、Yang–Mills–Higgs流の部分列極限を代数的に同定する。安定性を仮定せず、極限がHarder–Narasimhan–Seshadri次数付き層の二重双対とHiggs層として同型になることを示す。
abstract_en: ''
summary_en: The long-time behavior of a gauge flow should encode the destabilizing filtration of its initial holomorphic object. This work establishes that correspondence for reflexive Higgs sheaves with filtrations of arbitrary length. It identifies an extended subsequential limit with the reflexive hull of the graded HNS object. The proof separates identification of the limiting slopes from the construction of morphisms that split off the stable factors.
abstract_ja: 反射的Higgs層に対するYang–Mills–Higgs流の部分列極限を研究する。適切な初期計量から得られる極限を反射的Higgs層へ延長すると、それは初期層のHarder–Narasimhan–Seshadri filtrationの次数付き層の二重双対と同型である。初期層の安定性やfiltrationの長さに制限を置かず、従来の束および特殊な反射的層の場合を拡張する。
abstract_source_url: https://arxiv.org/abs/2610.35742
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.35742v1](https://arxiv.org/abs/2610.35742)
- **著者:** Tianshu Jiang, Yijian Zhang
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ベクトル束の安定性は、曲率を正規化するHermitian–Einstein計量の存在と結び付く。不安定な対象でも流を動かすことはできるが、その極限は元の束と同じ正則構造を保つとは限らない。本論文は、反射的Higgs層について極限に残る代数構造を決定する。

答えはHarder–Narasimhan–Seshadri filtrationである。まず傾きの異なる半安定部分へ分け、それぞれを同じ傾きの安定因子へ細分した次数付き対象を作る。その二重双対が、解析的に得た部分列極限の反射的延長と一致する。

新しい点は、反射的Higgs層でfiltrationの長さを任意に許すことである。Introductionは流全体の収束を前提にせず、適切な初期計量から部分列極限を取り、その同型類を特定する。これにより、不安定性の情報が流の極限でどのように分解として現れるかが明確になる。

## 背景と問題設定

$(X,\omega)$ は連結コンパクトKähler多様体、$\dim\_{\mathbb C}X=n\ge1$ とする。反射的連接層 $E$ に、$\theta:E\to E\otimes\Omega\_X^1$、$\theta\wedge\theta=0$ を満たすHiggs場を与える。傾きは

$$
\mu\_\omega(F)=\frac{1}{\operatorname{rank}F}
\int\_X c\_1(F)\wedge\frac{\omega^{n-1}}{(n-1)!}
$$

で定義し、Higgs不変部分層に対して安定性を考える。HNS filtrationの安定商を集めた次数付き層の二重双対を $\operatorname{Gr}^{\mathrm{HNS}}(E,\theta)^{\vee\vee}$ と書く。そのHiggs同型類は一意である。

特異集合を除いた $X\_0$ 上で、Hitchin–Simpson曲率 $\Theta^{\mathrm{HS}}\_{h,\theta}$ を用いる熱流は

$$
h^{-1}\frac{\partial h}{\partial t}
=-2\bigl(\sqrt{-1}\Lambda\_\omega\Theta^{\mathrm{HS}}\_{h,\theta}-\lambda I\_E\bigr),
\qquad \lambda=\frac{2\pi\mu\_\omega(E)}{\operatorname{Vol}(X,\omega)}
$$

である。適切な複素ゲージ変換のもとでYang–Mills–Higgs流と対応する。

## 主結果

### 部分列極限の代数的同定（Theorem 1.1）

適切な初期計量から得た流の部分列極限を反射的Higgs層 $(E\_\infty,\theta\_\infty)$ へ延長すると

$$
(E\_\infty,\theta\_\infty)\simeq
\operatorname{Gr}^{\mathrm{HNS}}(E,\theta)^{\vee\vee}
$$

がHiggs層として成り立つ。単に基礎となる連接層が同型なのではなく、Higgs場を含む同定である。$E$ の安定性は不要で、HNS filtrationの長さも任意である。

束の場合やHiggs場のない反射的層の場合には先行結果があった。反射的Higgs層ではfiltrationに非自明な部分層が一つだけの場合を超えて同定する点が本論文の位置付けである。二重双対は、流の滑らかな収束を得た開集合から特異集合を越えて反射的対象を比較するために不可欠である。

## 証明の見取り図

正則化と熱核評価から流を構成し、局所エネルギー評価で部分列極限を得る。Bando–Siu型の延長後、二つの仕事を行う。第一に、$L^1$ 制御を持つ近似臨界計量とHiggs Donaldson汎関数で極限の平均曲率スペクトルをHNSの傾きと一致させる。第二に、Higgs Hom–Bochner評価にスカラー熱ポテンシャルを用いて、各安定因子から極限の残りの商への非零Higgs射を作る。安定性と傾きの一致が分裂単射を与え、これを繰り返して全安定因子を分離する。後続節の証明そのものは検証対象としていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.35742)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.35742v1) — Section 1, pp. 2–4冒頭（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.35742v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
