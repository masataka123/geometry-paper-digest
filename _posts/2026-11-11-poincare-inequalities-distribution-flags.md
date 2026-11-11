---
layout: paper
title: On Poincaré-Type Inequalities for Flags of Distributions
title_ja: 正則分布の旗に対するPoincaré型次数不等式
authors: Antonio M. Ferreira, Miguel Rodríguez Peña, Fernando Lourenço
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: In this paper, we establish enumerative formulas and derive geometric inequalities for flags of holomorphic distributions on complex manifolds. First, given a codimension-one holomorphic distribution $\mathcal{G}$ on a complex manifold $M$, we establish an upper bound for the number of independent holomorphic $p$-distributions tangent to $\mathcal{G}$ with a prescribed associated twisting line bundle $\mathcal{L}$. As an application, we prove Poincaré-type degree inequalities for flags on certain classes of manifolds. Finally, we investigate the Mumford--Takemoto stability of the tangent sheaves of rank-two distributions. In particular, we establish several stability results for such distributions on projective spaces, smooth weighted complete intersection threefolds, and, in particular, on smooth hypersurfaces $V\subset\mathbb{P}^4$.
topic: algebraic-geometry
tags:
- foliations
- vector-bundles-sheaves
- stability
arxiv_id: 2611.13349v1
arxiv_url: https://arxiv.org/abs/2611.13349
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 余次元1の正則分布に接する分布の独立な個数を、捩れた微分形式の大域切断の次元で上から評価する。特異集合の余次元条件の下で射影空間などの分布の旗に次数不等式を導き、階数2の接層の傾斜安定性へ応用する。
abstract_en: In this paper, we establish enumerative formulas and derive geometric inequalities for flags of holomorphic distributions on complex manifolds. First, given a codimension-one holomorphic distribution $\mathcal{G}$ on a complex manifold $M$, we establish an upper bound for the number of independent holomorphic $p$-distributions tangent to $\mathcal{G}$ with a prescribed associated twisting line bundle $\mathcal{L}$. As an application, we prove Poincaré-type degree inequalities for flags on certain classes of manifolds. Finally, we investigate the Mumford--Takemoto stability of the tangent sheaves of rank-two distributions. In particular, we establish several stability results for such distributions on projective spaces, smooth weighted complete intersection threefolds, and, in particular, on smooth hypersurfaces $V\subset\mathbb{P}^4$.
summary_en: ''
abstract_ja: 複素多様体上で、一つの正則分布に含まれる分布の旗を数え上げる上界を示す。射影空間ではBottの公式によって具体的な次数不等式が得られ、他の射影多様体やHopf多様体にも対応する制限を導く。さらに孤立特異点を持つ階数2分布について、射影空間、重み付き完全交叉三次元多様体、射影四次元空間の滑らかな超曲面で接層の安定性を調べる。
abstract_source_url: https://arxiv.org/abs/2611.13349
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.13349v1](https://arxiv.org/abs/2611.13349)
- **著者:** Antonio M. Ferreira, Miguel Rodríguez Peña, Fernando Lourenço
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

正則分布の旗とは、接方向の包含関係を持つ二つの分布であり、両方が可積分なら葉層の旗となる。どの分布が別の分布に接するかという問題には、単に存在を問うだけでなく、その次数や独立な選び方の数を制限する側面がある。

本論文は、余次元1の分布に接する捩れた$p$-形式の数を、より低い次数の微分形式の大域切断で評価する。特異集合が十分高い余次元を持つという仮定が、この評価の重要な条件である。

射影空間ではBottの公式により上界が明示化され、旗の二つの分布の次数にPoincaré型不等式を得る。また分布の接層の傾斜安定性に応用し、孤立特異点を持つ階数2分布を対象に複数の幾何学的状況を扱う。

## 背景と問題設定

Poincaré問題は、平面上の葉層に有理第一積分があるかを、不変曲線の次数上界と結び付ける問題に由来する。無条件の次数上界は一般には存在せず、特異点や不変性について仮定が必要となる。旗の場合には、不変曲線に代えて分布そのものの次数関係を問う。

IntroductionはCorrêaら、およびRodríguezらによる射影空間での旗の不等式・数え上げの研究を出発点とする。本論文の第一の一般化は、射影空間に限らず複素多様体上で大域切断の次元を上界として使うことである。分布を扱うため、可積分性を一律に仮定して葉層だけに限定する結果ではない。

## 主結果

### 主定理：接する分布の数え上げ上界（Theorem 1.1）

複素多様体$M$上で、余次元1の分布$\mathcal G$が$\Omega\_M^1\otimes L\_1$の切断で定まるとする。$L,L\_1$は可逆層とし、$\operatorname{codim}\operatorname{Sing}(\mathcal G)\ge p+1$を仮定する。このとき$H^0(M,\Omega\_M^p\otimes L)$に属して$\mathcal G$に接する独立な正則分布の数は、

$$
\wp(p,L)=\dim H^0(M,\Omega\_M^{p-1}\otimes L\otimes L\_1^\vee)
$$

以下となる。捩れ線束を固定した上での上界であり、すべての次数を同時に動かした分布の総数を有限とする主張ではない。

### 射影空間での次数不等式（Corollary 1.2）

$\mathcal G$を$\Omega^1\_{\mathbb P^n}(d\_1)$の切断で定め、同じ余次元条件を仮定する。$\Omega^p\_{\mathbb P^n}(d)$の切断による接する分布の数は

$$
\wp(p,d)=\begin{cases}
\binom{d-d\_1+n-p+1}{d-d\_1}\binom{d-d\_1-1}{p-1},&d>d\_1+p-1,\\
0,&d\le d\_1+p-1
\end{cases}
$$

で上から抑えられる。したがって非自明な旗$\mathcal F\prec\mathcal G$があれば

$$
d\ge d\_1+p,\qquad \deg(\mathcal G)\le\deg(\mathcal F)-1
$$

が必要となる。ここで$d,d\_1$は捩れの次数であり、分布の次数と区別する。

### 他の多様体への応用（Corollaries 1.3–1.4）

Picard群が$\mathbb Z$の滑らかな射影多様体について、滑らかな二次超曲面$Q^n$（$n>2$）では、同じ旗と余次元条件から

$$
d<d\_1+p-(n+1),\quad d>d\_1+p-1,\quad d=d\_1,\quad d=d\_1+2p-(n+2)
$$

のいずれかが必要になる。$n$次元重み付き射影空間内の滑らかな完全交叉$V(a\_1,\ldots,a\_m)$で$n\ge m+3$の場合には$d\ge d\_1+p-1$となる。

Hopf多様体では次数に代わって捩れ線束の乗数が制約を受ける。たとえば古典的Hopf多様体の場合、$\Omega^p\otimes L\_a$と$\Omega^1\otimes L\_b$による旗に対し、$a=b\mu^m$、$m\ge p-1$という関係を得る。no-resonance型などの条件はCorollary 1.4に別々に述べられる。

### 階数2分布の接層の安定性（Introduction末尾の定理）

$\mathbb P^4$上で$\mathcal G=\mathcal G\_1\cap\mathcal G\_2$が完全交叉分布、すなわち$\omega=\omega\_1\wedge\omega\_2$で定まり、各余次元1分布$\mathcal G\_i$の特異集合が孤立点のみからなるなら、$\mathcal G$は安定である。

well-formedな重み付き射影空間内の滑らかな完全交叉三次元多様体$V=V(a\_1,\ldots,a\_{n-3})$では、孤立特異点のみを持つ二次元分布は、重みと次数の和が$|\omega|\le|a|+2$を満たせば安定となる。

特に滑らかな超曲面$V\subset\mathbb P^4$では、孤立特異点のみを持つ二次元分布$\mathcal D$は、$\deg V\ne2$なら安定である。$\deg V=2$なら$\deg\mathcal D>5$で安定、$\deg\mathcal D\ge5$で半安定となる。これらは接層のMumford–Takemoto安定性についての結果であり、K安定性とは別の概念である。

## 結果と証明方針の関係

Introductionで具体的に示される計算経路は、一般上界の大域切断数を射影空間でBottの公式により求め、非零の切断が存在するための次数条件を取り出すというものである。二次超曲面やHopf多様体でも対応する切断空間の計算を使う。安定性結果についてIntroductionは先行研究との関係と定理を提示するが、接層の不安定化部分層を排除する証明の詳細までは述べていないため、ここでは後続節の議論を再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.13349)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.13349v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollaries 1.2–1.4; Introduction末尾の番号なしの三つの安定性定理
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.13349v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
