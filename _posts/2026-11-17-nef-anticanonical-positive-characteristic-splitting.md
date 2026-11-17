---
layout: paper
title: The structure of varieties with nef anticanonical divisor in positive characteristic
title_ja: 正標数におけるnef反標準因子とabelian多様体上の分裂
authors: Jiarong Fan, Lei Zhang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'Let $X$ be a regular projective variety with nef anticanonical divisor over an algebraically closed field of characteristic $p>0$, and let $f:X\to A$ be a surjective morphism to an abelian variety. We prove that there exists an isogeny $A'' \to A$ such that, the base change $f'': X\times_AA'' \to A''$ admits a Zariski locally trivial structure. If moreover $-K_X\equiv D$ for some semiample $\mathbb Q$-divisor $D$, then $-K_X\sim_{\mathbb Q}D$, and there exists an isogeny $A'' \to A$ such that, the base change $ X\times_AA'' \cong X_0\times A''$ where $X_0$ is the fiber over the identity $0\in A''$.'
topic: algebraic-geometry
tags:
- positivity
- positive-characteristic
- singularities
- vector-bundles-sheaves
arxiv_id: 2611.19691v1
arxiv_url: https://arxiv.org/abs/2611.19691
arxiv_submitted: '2026-11-15'
arxiv_updated: '2026-11-15'
summary: 正標数の強F正則対について、nefな反対数標準因子がabelian多様体への全射に課す構造を調べる。適切なCartier指数条件のもと、isogeny後のZariski局所自明性を示し、数値的にsemiampleな場合には大域的な積分解とQ線形同値まで得る。
abstract_en: ''
summary_en: In positive characteristic, a smooth total space can have nonreduced Albanese fibers, so characteristic-zero structure theorems cannot simply be copied. The authors obtain splitting statements after an isogeny while retaining the scheme structure of the fiber. Their argument applies to strongly F-regular pairs with a prime-to-characteristic Cartier index. A stronger positivity hypothesis upgrades local triviality to a product and upgrades numerical equivalence to rational linear equivalence.
abstract_ja: 代数閉体の正標数で、nef反標準因子を持つ正則射影多様体からabelian多様体への全射を考える。論文はisogenyによる底変換後のZariski局所自明性を示す。反標準因子がsemiampleなQ因子と数値的に同値なら、実際にQ線形同値となり、底変換後の全空間はファイバーと底の積になる。Introductionではこれを強F正則対と、標数で割れないCartier指数を持つ反対数標準因子の設定へ拡張して述べる。
abstract_source_url: https://arxiv.org/abs/2611.19691
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.19691v1](https://arxiv.org/abs/2611.19691)
- **著者:** Jiarong Fan, Lei Zhang
- **初回投稿日:** 2026-11-15
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

nef反標準因子を持つ射影多様体のAlbanese写像には、局所自明性や被覆後の積分解が期待される。複素数体上では大きな進展がある一方、正標数では幾何学的ファイバーが特異、あるいは非被約となることが障害になる。

本論文は正標数で、isogenyによる底変換後にZariski局所的な積構造を得る。さらに反対数標準因子が数値的にsemiampleなら、その数値同値をQ線形同値へ強め、全体の積分解を証明する。

定理は滑らかな多様体だけでなく、強F正則対を対象とする。重要なのは全空間の強F正則性とCartier指数条件であり、幾何学的一般ファイバーの強F正則性を追加仮定する従来結果から前進する。積のファイバーが滑らか、あるいは被約とは限らない点は保持される。

## 背景と問題設定

$k$ を標数 $p>0$ の代数閉体とし、$X$ を正規射影多様体、$\Delta$ を有効Q-Weil因子とする。$(X,\Delta)$ は強F正則と仮定する。$f:X\to A$ はabelian多様体への全射で、$X\_0$ を原点上のスキームとしてのファイバーとする。

Introductionは、複素数体上のCaoによる局所自明性やKawamataの分裂結果と、正標数のEjiriらの結果を比較する。正標数ではファイバーの性質を全空間から推測できないため、強F正則性をどこで使うかが核心となる。

## 主結果

### 数値的semiample性から大域的分裂へ（Theorem 1.1）

$K\_X+\Delta$ のCartier指数が $p$ で割れず、semiampleなQ-Cartier Q因子 $D$ に対し

$$
-(K\_X+\Delta)\equiv D
$$

とする。このとき

$$
-(K\_X+\Delta)\sim\_{\mathbb Q}D
$$

である。さらに任意の全射 $f:X\to A$ に対しisogeny $A'\to A$ が存在して、$A'$ 上のスキームとして

$$
(X,\Delta)\times\_A A'\simeq (X\_0,\Delta|\_{X\_0})\times\_k A'
$$

となる。境界の制限はQ-almost Cartier因子として解釈する。従って、単にファイバーが互いに同型というだけでなく、底変換後に対として一つの積になる。

### nef性から局所自明性へ（Theorem 1.2）

$p\nmid m$ となる整数 $m>0$ に対し $-m(K\_X+\Delta)$ がnef Cartier因子であれば、あるisogeny $A'\to A$ とZariski開被覆 $A'=\bigcup\_iU\_i$ が存在して

$$
(X,\Delta)\times\_AU\_i\simeq(X\_0,\Delta|\_{X\_0})\times\_kU\_i
$$

となる。semiampleな因子への数値同値を課さない代わりに、結論は局所的である。

### Albanese写像（Corollary 1.3）と非被約ファイバー

Theorem 1.2の仮定下でAlbanese写像はfibration、すなわち $f\_\ast \mathcal O\_X=\mathcal O\_A$ を満たす。Example 1.5は、滑らかな全空間から出発しても分裂するファイバーが非被約になり得ることを示す。したがって、isogenyをétale被覆に置き換えたり、積の因子を滑らかと仮定したりしない。

## 証明の見取り図

Introductionによると、適切な相対的豊富因子 $B$ を選び、すべての $n>0$ について $f\_\ast \mathcal O\_X(nB)$ がnumerically flatとなることが分裂への鍵である。従来のEjiriの定理は幾何学的一般ファイバーの強F正則性を必要とする。

著者らは元の射の代わりに $X\times\widehat A\to\widehat A$ を考え、Poincaré束で偏極をひねる。この射へ既知の定理を適用して、$\operatorname{Pic}^0(A)$ に沿う偏極の同型を得て、分裂を導く。非完全体上への拡張はIntroductionのQuestion 3として残され、ここでの定理の結論とは区別される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.19691)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.19691v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2、Corollary 1.3、Example 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.19691v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
