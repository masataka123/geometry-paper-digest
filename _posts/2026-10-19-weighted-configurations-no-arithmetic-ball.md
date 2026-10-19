---
layout: paper
title: Weighted configurations and the nonexistence of arithmetic ball quotient compactifications
title_ja: 9点以上の重み付き配置空間と算術的複素球商の非存在
authors: Ryunosuke Nakano, Hisato Matsukawa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.NT
arxiv_abstract: We prove that, for every $n\ge9$, no ordered GIT quotient of $n$ points on $\mathbb P^1$ with positive rational weights smaller than one and of total weight two is isomorphic to the Baily--Borel compactification of an arithmetic complex ball quotient. The weights may lie on stability walls, and the lattice may have torsion and ramify along divisors. No compatibility with a prescribed period map is assumed. The proof compares homomorphisms from the tangent bundle to line bundles of negative degree with normal bundles of arithmetic fixed subvarieties. We describe these homomorphisms through coincident marked points and prove vanishing statements for their kernels. The comparison, together with integrality of Chern classes and the invariant theory of finite reflection groups, gives the nonexistence theorem without a Fano assumption on the GIT quotient.
topic: algebraic-geometry
tags:
- uniformization
- chern-classes
- moduli
- vector-bundles-sheaves
- positivity
arxiv_id: 2610.23228v1
arxiv_url: https://arxiv.org/abs/2610.23228
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: 射影直線上の9点以上の順序付き重み付きGIT商が、算術的複素球商のBaily–Borelコンパクト化として実現できないことを示す。各重みが0と1の間、総和が2という条件の下で、安定性の壁・捩れ・分岐を許し、商のFano性も要求しない。
abstract_en: ''
summary_en: This paper rules out arithmetic ball compactifications for a whole range of weighted configuration spaces. It permits weights on walls and allows torsion and divisorial branching in the hypothetical lattice. The argument studies negative line-bundle quotients of the tangent bundle and compares them with arithmetic fixed loci. An induction and Chern-class integrality remove the need to assume that the configuration quotient is Fano.
abstract_ja: 著者らは、重み付き点配置の接束から負次数の直線束への写像を点の一致によって記述し、算術的固定部分多様体の法束と比較する。Chern類の整性と有限鏡映群の不変式論を組み合わせることで、指定した周期写像に依存しない非存在定理を得る。対象は正の有理数重みの総和が2となる9点以上の順序付き配置である。
abstract_source_url: https://arxiv.org/abs/2610.23228
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.23228v1](https://arxiv.org/abs/2610.23228)
- **著者:** Ryunosuke Nakano, Hisato Matsukawa
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.AG（主分類）; math.CV, math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

点配置空間と複素球商の対応を考えるとき、特定の周期写像の条件が破れるだけでは、別の算術格子による実現まで否定できない。本論文は格子と代数的同型を制限せず、9点以上の重み付き配置をまとめて扱う。

重みは全て正の有理数で1未満、総和が2である。重みが安定性の壁に乗る場合も含め、商にFano性を仮定しない。仮想的な球商の側にも捩れや因子に沿う分岐を許すため、滑らかで分岐のない場合だけの非存在結果ではない。

接束の負次数商と、算術群の固定部分多様体の法方向を比較することが中心となる。12点の等重みの場合はHulek–Kondō–Maedaの問いへの回答となり、7点を扱う関連論文のための共通の幾何学的・算術的道具も提供する。

## 背景と問題設定

$n\geq9$、$\mu\_i\in\mathbb Q$として

$$
0<\mu\_i<1,\qquad \sum\_{i=1}^n\mu\_i=2
$$

を仮定する。分母を払う整数$m>0$により

$$
X\_\mu=(\mathbb P^1)^n\mathbin{//}\_{\mathcal O(m\mu\_1,\ldots,m\mu\_n)}\operatorname{SL}(2,\mathbb C)
$$

を定める。点のラベルは保持し、この商は分母を払う$m$の選択に依存しない。安定な配置とは、各点に集まる重みの和が1未満となる配置である。

## 主結果

### 主定理（Theorem 1.1）

上記の全ての重みに対して、算術格子$\Gamma\subset\operatorname{PU}(1,n-3)$による代数的同型

$$
X\_\mu\simeq(\mathbb B^{n-3}/\Gamma)^{\mathrm{BB}}
$$

は存在しない。ラベル置換との整合性、指定した周期写像との整合性、既定の群の正規部分群・合同部分群であることを要求しない。

この定理はDeligne–Mostow周期写像の整性条件が失敗するというだけの主張より強い。商がFanoであるという正値性を仮定せず、壁上の重みも対象に含める。一方、非算術格子やBaily–Borel以外のコンパクト化は定理の射程外である。

## 証明の見取り図

普遍的な標点付き射影直線を使い、接束から負次数の直線束への写像とその核を記述する。球商側では、元の算術格子の固定球と法方向の不変多項式を取り出し、有限指標や中心周期を同時に保ちながら、完全な正規化群に属する曲線上で比較する。

Introductionは三段階の簡約を述べる。標点の次数から有効曲線の分解と初期評価を得る。次に残存する既約因子の階数を高々2に絞り、その固定コンパクト化を一つまたは二つのラベルを併合した配置商と同定する。$n=9,10$からの強い帰納法によって$n\geq11$の因子を排除する。

最後に安定化群がtype Aになった段階で、$N=n-2$とおき、素数$p$に関する積として

$$
b\_N=\prod\_{p\mid N}p^{\lceil2v\_p(N)/3\rceil},\qquad C\_N=\frac{2N^2}{b\_N}
$$

を導入する。Chern類の整性と動く標点曲線から、比較に用いるchamber model $W$について$K\_W+C\_NL$がnefとなる。$L$は元の格子の保型有理直線束、または指定された引き戻しである。さらに$N\geq11$で

$$
C\_N<\frac{N^2-4N+1}{2}
$$

となり、固定曲線上の一様なtype A比較と矛盾する。$H=-K\_W$という記法自体に豊富性の意味はなく、ここでもFano仮定を紛れ込ませないことが重要である。

## 原論文との対応

- **Abstractページ:** [Weighted configurations and the nonexistence of arithmetic ball quotient compactifications](https://arxiv.org/abs/2610.23228)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.23228v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1; equations (1.1)–(1.2)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.23228v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
