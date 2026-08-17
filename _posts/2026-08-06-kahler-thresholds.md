---
layout: paper
title: "Kähler thresholds"
title_ja: "Kähler閾値"
authors: "Gabriella Clemente, Carlos Simpson"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
topic: algebraic-geometry
tags:
  - hodge-theory
arxiv_id: "2606.08224v1"
arxiv_url: "https://arxiv.org/abs/2606.08224v1"
arxiv_submitted: "2026-06-06"
arxiv_updated: "2026-06-06"
summary: >-
  Kähler条件を $\|\nabla J\|$ が小さいalmost-Hermitian構造へ弱めても、有界幾何の下では奇数次Betti数の偶数性が保たれることを示す。弱いSobolev位相でのコンパクト性と低正則性Hodge理論を組み合わせ、Kähler幾何の性質が存続する「閾値」を定式化する。
abstract_en: ""
summary_en: >-
  The paper introduces almost-complex-Kähler manifolds by requiring the covariant derivative of the almost-complex structure to be small. Under uniform bounds on dimension, diameter, Ricci curvature, and injectivity radius, sufficiently small non-integrability preserves parity of all odd Betti numbers. A compactness theorem and Hodge theory for Sobolev-regular limiting Kähler structures provide the main mechanism. The authors frame this as a program for identifying thresholds at which classical Kähler constraints remain valid.
abstract_ja: >-
  almost-Hermitian多様体で $\nabla J$ が一様に小さいものをacK多様体として導入する。次元、直径、Ricci曲率、単射半径を一様に制御すると、Kähler条件からのずれが十分小さい範囲で全ての奇数次Betti数が偶数になる。証明にはacK多様体のコンパクト性と、Sobolev正則なKähler構造に対する新しいHodge理論を用いる。さらに、古典的Kähler幾何の性質が非可積分な領域まで保たれる範囲を「Kähler閾値」として研究する計画を提示する。
abstract_source_url: "https://arxiv.org/abs/2606.08224v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.08224v1](https://arxiv.org/abs/2606.08224v1)
- **著者:** Gabriella Clemente, Carlos Simpson
- **初回投稿日:** 2026年6月6日
- **最終更新日:** 2026年6月6日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体ではHodge分解により奇数次Betti数が偶数になる。本論文は、almost-Hermitian多様体 $(X,g,J)$ において $\|\nabla J\|$ が小さいという「Kählerに近い」条件だけで、この位相的制約がどこまで残るかを問う。

次元、直径、Ricci曲率、単射半径を固定した有界幾何のクラスでは、ある正の閾値 $\epsilon_0$ が存在し、$\epsilon_0$-acKであるすべての多様体の奇数次Betti数が偶数になる。結論は定性的だが、Kähler性からの小さな逸脱に対する位相的不変量の安定性を与える。

鍵は、acK構造列の弱いSobolev位相でのコンパクト性と、極限に現れる低正則性の形式的Kähler構造に対するHodge分解である。これにより反例列をKähler型の極限へ送り、古典的な偶数性と矛盾させる。

## 背景と問題設定

論文は $J$ が $g$ と両立するalmost-complex構造で

$$
\|\nabla J\|_g\leq\epsilon
$$

を満たす場合を $\epsilon$-almost-complex-Kähler（$\epsilon$-acK）と呼ぶ。Kählerの場合は $\nabla J=0$ であり、この条件は基本2形式が閉じることや $J$ の可積分性からのずれを同時に測る。

$\mathcal M(n,d,k,i_0)$ は次元 $n$、直径上界 $d$、Ricci曲率の一様な下側制御、単射半径下界 $i_0$ をもつコンパクトRiemann多様体のクラスである。これらの条件は退化を防ぎ、極限上でHodge理論を比較するために不可欠である。

## 主結果

### Theorem 1（奇数次Betti数の偶数性）

整数 $n>1$、$a\geq1$ と有界幾何の定数 $d,k,i_0$ を固定すると、$0<\epsilon_0\leq a$ が存在する。$(X,g)\in\mathcal M(n,d,k,i_0)$ で $(X,g,J)$ が $\epsilon_0$-acKならば、すべての $j$ について

$$
b_{2j+1}(X)\equiv0\pmod 2
$$

となる。閾値は個々の多様体ではなく、固定した幾何学的境界だけに依存する。

### Theorem 2（acK構造のコンパクト性）

任意の $a>0$ と十分大きい $p$ に対し、有界幾何を満たすacK構造の空間は弱 $W^{2,p}\times W^{1,p}$ 位相でprecompactである。極限の計量は $W^{2,p}$、almost-complex構造は $W^{1,p}$ だが、$\nabla J=0$ となる極限には低正則性Hodge分解を適用できる。

## 証明の見取り図

閾値が存在しないと仮定し、$\|\nabla J_i\|\to0$ だが奇数次Betti数が奇数である列を取る。コンパクト性定理により部分列は弱Sobolev位相で極限 $(X,g,J)$ に収束し、極限では $\nabla J=0$ となる。論文が構築するSobolev正則なHodge理論はde Rhamコホモロジーを調和形式で表し、型分解を回復する。複素共役が奇数次数の成分を対にするため極限の奇数次Betti数は偶数となり、列の位相型の安定性と矛盾する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.08224v1](https://arxiv.org/abs/2606.08224v1)
- **Introduction:** pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1, Theorem 2
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
