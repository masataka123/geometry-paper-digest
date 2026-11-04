---
layout: paper
title: Admissible extremal rays and the anticanonical minimal model program
title_ja: 許容極端半直線と反標準極小モデル・プログラム
authors: Sung Rak Choi, Sungwook Jang, Dae-Won Lee
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We develop an anticanonical minimal model program for projective $\mathbb{Q}$-factorial klt pairs $(X,\Delta)$ such that $-(K_{X}+\Delta)$ is pseudoeffective. We first prove the cone and contraction theorems for potentially klt triples and establish the existence of flips for such triples. Using these results, we introduce the notion of admissible extremal rays and show that $(K_{X}+\Delta)$-positive admissible extremal rays are precisely the rays that are to be contracted by $-(K_{X}+\Delta)$-MMP. The elementary MMP steps associated to such admissible rays preserve klt singularities. For potentially klt pairs $(X,\Delta)$ with $\mathbb{Q}$-divisors $\Delta$, we prove that every $(K_{X}+\Delta)$-positive extremal ray is admissible and obtain a cone theorem for the $(K_{X}+\Delta)$-positive part of the Mori cone. Assuming termination of the anticanonical minimal model program, we establish a dichotomy: potentially klt pairs admit anticanonical minimal models, whereas non-potentially
  klt pairs admit non-admissible models.'
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- singularities
- positivity
arxiv_id: 2611.04145v1
arxiv_url: https://arxiv.org/abs/2611.04145
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: 擬有効因子を加えたpotentially klt三つ組に対し、錐・収縮・フリップの基本定理を構成する。これを反標準因子に適用し、klt性と擬有効性を保つ許容極端半直線を定式化する。反標準MMPを進める枠組みを与えるが、一般の停止は予想として残る。
abstract_en: ''
summary_en: Running a minimal model program in an anticanonical direction requires control of the singularities produced by each step. The authors encode the asymptotic vanishing of a pseudoeffective divisor in a discrepancy condition on a triple. For triples satisfying their pklt condition, they establish the cone, contraction and flip statements needed to run a program. Their application singles out admissible rays for which the anticanonical operations preserve the relevant class of pairs; termination is not claimed in general.
abstract_ja: 反標準方向の収縮やフリップは、通常のklt対のMMPと同じようには特異点の良さを保たない。本論文は因子の漸近的消滅量をdiscrepancyから差し引くpotentially klt条件を用い、三つ組に対するMMPの基礎定理を示す。反標準因子が擬有効な対には許容極端半直線を導入し、その操作の後もklt性と反標準擬有効性が保たれることを示す。
abstract_source_url: https://arxiv.org/abs/2611.04145
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.04145v1](https://arxiv.org/abs/2611.04145)
- **著者:** Sung Rak Choi, Sungwook Jang, Dae-Won Lee
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

極小モデル・プログラムは、標準因子の負の方向にある曲線を収縮し、代数多様体をより扱いやすいモデルへ変えていく。反標準因子を対象に同様の操作を行いたい場合には、途中でklt性が失われるなどの問題が生じる。本論文は、どの半直線に沿えば望ましい性質を維持できるかを考える。

著者らは、対$(X,\Delta)$に擬有効因子$D$を加えた三つ組を扱い、$D$の漸近的な消滅量を含めて特異性を測る。このpotentially klt条件の下で、$K\_X+\Delta+D$に関する錐定理、収縮定理、フリップの存在を証明する。

次にこの枠組みを反標準方向へ適用する。big因子を用いて上の理論の範囲に収められる極端半直線を「許容」と定めると、それに沿う反標準操作はklt性と反標準因子の擬有効性を保つ。

したがって、反標準MMPを一歩ずつ進めるための理論が得られる。ただしプログラムが必ず有限回で止まるという主張ではなく、一般の停止問題は残される。この点を、通常のMMPの既知の結果から自動的に従うものと理解してはならない。

## 背景と問題設定

$D$を擬有効R-Cartier因子とし、$X$上の素因子付値$E$について、potential discrepancyを

$$
a(E;X,\Delta,D)=a(E;X,\Delta)-\sigma\_E(D)
$$

と定める。$\sigma\_E(D)$は因子$D$の漸近的消滅量である。三つ組がpkltであるとは

$$
\inf\_E a(E;X,\Delta,D)>0
$$

となることをいう。通常の対の特異点だけでなく、擬有効因子の固定的な寄与も同時に制御する条件である。

反標準因子$-(K\_X+\Delta)$が擬有効なQ-factorial klt対について、あるbig R-Cartier因子$D$で$(X,\Delta,D)$がpkltとなり、$K\_X+\Delta+D$が負になる極端半直線を許容と呼ぶ。このうち$K\_X+\Delta$が正となる半直線を反標準MMPに用いる。

## 主結果

### 三つ組の錐定理（Theorem 1.1）

pklt三つ組に対し、閉じた曲線錐は

$$
\overline{\operatorname{NE}}(X)=\overline{\operatorname{NE}}(X)\_{K\_X+\Delta+D\geq0}+\sum\_i R\_i
$$

と分解される。負の極端半直線$R\_i$は高々可算個で、各半直線は有理曲線$C\_i$で生成され、

$$
0<-(K\_X+\Delta+D)\cdot C\_i\leq2\dim X
$$

を満たす。任意のample因子$A$を加えた$K\_X+\Delta+D+A$に対して負となる半直線は有限個であり、負の部分での局所有限性が得られる。

### 収縮の存在（Theorem 1.2）

上の負の極端半直線$R$には、正規射影多様体$Y$への射影収縮$\varphi:X\to Y$が存在する。$\varphi\_\ast\mathcal O\_X=\mathcal O\_Y$かつ$\rho(X/Y)=1$であり、曲線が収縮されることと、その数値類が$R$に属することが同値になる。

### フリップの存在（Theorem 1.3）

三つ組がさらにQ-factorialであり、対象の収縮がflipping contractionである場合には、$K\_X+\Delta+D$に関するフリップが存在する。錐の記述だけでなく、小収縮の先へプログラムを継続するための操作が確保される。

### MMPを実行する枠組み（Theorem 1.4）

Q-factorial pklt三つ組では、以上の操作によるMMPを実行できる。ただし、この定理は任意の列の停止を含まない。Introductionでは停止を別の予想として扱っている。

### 反標準方向で保存される性質（Theorem 1.5）

反標準因子が擬有効なQ-factorial klt対に対し、許容な正の極端半直線に沿う因子収縮の後も、得られる対$(Y,\Delta\_Y)$はkltであり、$-(K\_Y+\Delta\_Y)$は擬有効である。小収縮に続くフリップについても、$(X^+,\Delta^+)$に同じ二つの性質が残る。

許容性を外せば、別の境界を使って収縮自体を構成できても、元の対に対応するklt性は壊れ得る。停止を仮定した場合の行き先は反標準極小モデル、または許容な操作をこれ以上行えないモデルとして説明される。

## 証明の見取り図

Introductionの構成は、まずpotential discrepancyによって擬有効因子の寄与を特異点論へ組み込み、三つ組について錐・収縮・フリップを順に整えるというものである。その後、big因子を用いた許容性により反標準方向の操作をこの理論へ接続する。

この導入部が述べるのは主として枠組みと各定理の論理的な役割であり、個々のフリップの構成や停止の証明を与えるものではない。本記事もそれを越えて証明の詳細を再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.04145)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.04145v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.04145v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
