---
layout: paper
title: Symplectic singularity as hyperKähler cone
title_ja: シンプレクティック特異点のハイパーケーラー錐構造
authors: Yuji Odaka
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.RT
arxiv_abstract: We prove that any symplectic singularity has a structure of hyperK\"ahler cone. In particular, it is equivalent to the vertex of a conical symplectic variety, and it is automatically K-polystable.
topic: algebraic-geometry
tags:
- singularities
- hyperkahler-geometry
- k-stability
- calabi-yau-geometry
arxiv_id: 2610.35510v1
arxiv_url: https://arxiv.org/abs/2610.35510
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: シンプレクティック特異点の解析的芽が、ハイパーケーラー錐計量を持つK-polystableなアフィン錐の頂点と同型になることを示す論文である。Donaldson–Sun型の二段階退化の第二段階を自明化し、従来必要だった追加仮定を取り除く。
abstract_en: ''
summary_en: Canonical metric degenerations provide a route from a singularity to an affine cone, but may appear to change its local geometry. This paper studies the rigidity of that route for symplectic singularities. A Bochner principle for homogeneous reflexive forms is combined with Poisson deformation theory to trivialize the second degeneration. The resulting identification equips the regular part of the original analytic germ with hyperkähler geometry.
abstract_ja: 本論文は、任意のシンプレクティック特異点の解析的芽を、K-polystableな円錐状シンプレクティック多様体の頂点の芽として実現する。その正則部分にはハイパーケーラー錐計量が入る。中心となるのは、標準的な二段階退化の第二段階が、指定されたトーラス作用を保って積族になるという剛性定理である。
abstract_source_url: https://arxiv.org/abs/2610.35510
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.35510v1](https://arxiv.org/abs/2610.35510)
- **著者:** Yuji Odaka
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; math.DG, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

シンプレクティック特異点とは、正則部分の正則シンプレクティック形式が解消へ延長する正規多様体の特異点である。その局所構造が、縮小する代数的作用を持つ錐として記述できるかという問題を、標準計量と退化の理論から扱う。

Donaldson–Sun理論とその代数的展開では、特異点からK-semistableな錐を経由してK-polystableな錐へ至る二段階の退化が現れる。本論文が解決するのは第二段階の剛性であり、一般ファイバーと中心ファイバーを同一視する。第一段階についての既存結果と組み合わせることで、出発点の解析的芽そのものに錐構造を得る。

解析の役割は、特異点を持つCalabi–Yau錐上で適切な重みの形式が平行になることを示す点にある。一方、代数幾何の役割は、そこから得られる積構造とPoisson変形の剛性を結び付ける点にある。論文はこの組合せによって、Namikawa–Odakaの先行研究に残っていた追加仮定を除く。

## 背景と問題設定

Introductionの基本図式は

$$
(x\in X)\rightsquigarrow(0\in W)\rightsquigarrow(0\in C)
$$

である。第二の矢印を正規平坦族 $p:\mathcal W\to\mathbb A^1\_t$ として実現する。主定理の仮定(H1)は、ファイバーごとのトーラス $T$ と基底に正の重み $d$ で作用する可換な試験トーラス、共通の正のReebベクトル、および各重み成分の有限自由性を要求する。(H2)は $W$ のシンプレクティック形式がReeb重み2を持つこと、(H3)は中心錐 $C$ のK-polystabilityと弱Calabi–Yau錐計量の存在である。

弱計量の仮定には、半径の二乗の局所有界な多重劣調和延長、固有な基準半径との一様比較、正則部分での

$$
g=dr^2+r^2g\_L,\qquad \omega=dd^c(r^2/2),\qquad \omega^n=c\_0dV\_{\mathrm{can}},\quad c\_0>0
$$

が含まれる。単なる形式的な錐作用だけを仮定した主張ではない。

## 主結果

### 同次反射的形式の平行性（Theorem 1.1）

複素次元 $n\ge2$ のK-polystableなlog terminal錐で、Reebベクトルを $A\_C(\xi)=n$ と正規化し、上記の弱計量条件を仮定する。次数 $1\le p\le n$ の大域的反射的形式 $\alpha\in H^0(C,\Omega\_C^{[p]})$ が実拡大 $\delta\_s$ に対して

$$
\delta\_s^\ast \alpha=s^p\alpha\quad(s>0)
$$

を満たすなら、正則部分で $\nabla\_g\alpha=0$ となる。特異集合が孤立していない場合も含むBochner原理である。

### 第二退化の自明性（Theorem 1.2）

(H1)–(H3)を満たす族は、指定された中心ファイバー上で恒等写像を誘導する同変同型

$$
\mathcal W\simeq C\times\mathbb A^1\_t
$$

を持つ。同型は $T\times G\_{\mathrm{test}}$ の作用を保つ。したがって $W\simeq C$ が $T$-多様体として成立する。対象はシンプレクティック特異点から生じる族に限らず、この三条件を満たす族全体である。

### 元の特異点への帰結（Corollary 1.3）

任意のシンプレクティック特異点 $x\in X$ は、付随するK-polystable錐の頂点と同じ解析的芽を持つ。錐の正則部分には平行な複素構造 $I,J,K$ が入り、計量はハイパーケーラー錐計量となる。これは多様体全体の大域同型ではなく、特異点の解析的芽に関する結論である。

## 証明の見取り図

Introductionは三つの段階を挙げる。まず特異集合の近傍に適した切断関数を用いてBochner議論を正当化する。次にHarrison–Poissonコホモロジーと低次数のKünneth公式によって、積型Poisson代数の形式的剛性を準備する。最後に $C$ の有限quasi-étale Galois被覆に積構造を得て、被覆と $C$ のPoisson剛性を退化族の自明性へ結び付ける。ここではIntroductionの構想を説明しており、後続節の解析評価や変形論の証明を再検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.35510)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.35510v1) — Section 1, pp. 1–4（主結果と技術的方針）
- **Introduction中で言及された主要結果:** Theorem 1.1, Theorem 1.2, Corollary 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.35510v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
