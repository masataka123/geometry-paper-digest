---
layout: paper
title: Gepner stability conditions on hypersurface categories
title_ja: 超曲面の圏におけるGepner型安定性条件
authors: Anibal Aravena, Peize Liu, Jenia Tevelev
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We construct numerical Bridgeland stability conditions on the category of graded matrix factorizations of every smooth complex projective hypersurface of degree $d\ge2$. These conditions are of Gepner type $(\tau,2/d)$, where $\tau$ is the grading shift autoequivalence. By Orlov's theorem, this gives stability conditions of Gepner type on all Calabi--Yau hypersurfaces and on Kuznetsov components of all Fano hypersurfaces. These conditions satisfy a mass-Hom bound and the support property on the full numerical Grothendieck group. Semistable objects of fixed numerical class and phase admit proper good moduli spaces.
topic: algebraic-geometry
tags:
- stability
- fano-varieties
- calabi-yau-geometry
- moduli
arxiv_id: 2611.05350v1
arxiv_url: https://arxiv.org/abs/2611.05350
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: Fano超曲面のKuznetsov成分とCalabi–Yau超曲面の導来圏に、次数シフトと整合するGepner型Bridgeland安定性条件を構成する。全数値Grothendieck群上の台条件とmass–Hom評価を伴い、半安定対象のproperなgood moduli spaceを得る。
abstract_en: We construct numerical Bridgeland stability conditions on the category of graded matrix factorizations of every smooth complex projective hypersurface of degree $d\ge2$. These conditions are of Gepner type $(\tau,2/d)$, where $\tau$ is the grading shift autoequivalence. By Orlov's theorem, this gives stability conditions of Gepner type on all Calabi--Yau hypersurfaces and on Kuznetsov components of all Fano hypersurfaces. These conditions satisfy a mass-Hom bound and the support property on the full numerical Grothendieck group. Semistable objects of fixed numerical class and phase admit proper good moduli spaces.
summary_en: ''
abstract_ja: 次数2以上の滑らかな複素射影超曲面の次数付き行列因子化圏に、Gepner型の数値的Bridgeland安定性条件を構成する。次数をd、内部次数シフトをτとすると、Gepner型は(τ,2/d)である。Orlovの定理により、すべてのCalabi–Yau超曲面とFano超曲面のKuznetsov成分に対応する安定性条件を与える。全数値Grothendieck群上の台条件とmass–Hom評価を満たし、数値類と位相を固定した半安定対象はproperなgood moduli spaceを持つ。
abstract_source_url: https://arxiv.org/abs/2611.05350
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.05350v1](https://arxiv.org/abs/2611.05350)
- **著者:** Anibal Aravena, Peize Liu, Jenia Tevelev
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Bridgeland安定性条件の存在だけでなく、圏の自然な自己同値と整合する安定性条件を探すことが本論文の問題である。超曲面の方程式から作る次数付き行列因子化圏には、内部次数を一つずらす操作があり、それに合わせて半安定対象の位相が一様に回転する条件を求める。

著者らは、滑らかなFano超曲面のKuznetsov成分とCalabi–Yau超曲面の導来圏について、このGepner対称性を備えた安定性条件を一様に構成する。個々の低次の超曲面で知られていた構成から、任意の次数を扱う方法へ進むという位置づけである。

構成は台条件に加えて、対象間のHom空間の総次元をmassで制御する評価を持つ。これにより、固定した数値類と位相の半安定対象をproperなgood moduli spaceで扱える。一般の射影多様体の導来圏に安定性条件が存在するという先行結果だけでは、その部分圏の存在やGepner対称性は得られないことも説明される。

## 背景と問題設定

$X=\lbrace W=0\rbrace \subset\mathbb P^{N-1}$を次数$d\geq2$の滑らかな超曲面とする。$N>d$では

$$
D^b(X)=\langle\operatorname{Ku}(X),\mathcal O\_X,\mathcal O\_X(1),\ldots,\mathcal O\_X(N-d-1)\rangle
$$

という半直交分解があり、残りの$\operatorname{Ku}(X)$がKuznetsov成分である。$N=d$では$X$はCalabi–Yauであり、対象は$D^b(X)$全体となる。Orlovの同値はこれらを$\operatorname{MF}^{\mathrm{gr}}(W)$と結び付ける。次数シフト$\tau$は$\tau^d\simeq[2]$を満たすため、自然に期待される位相の変化は$2/d$となる。

## 主結果

### Gepner型安定性条件と評価（Theorem 1.2）

$N\geq d$のとき、$\operatorname{MF}^{\mathrm{gr}}(W)$は全数値Grothendieck群$K\_{\mathrm{num}}$上の台条件を満たす数値的Bridgeland安定性条件$\sigma=(Z,\mathcal P)$を持ち、

$$
Z(\tau E)=e^{2\pi i/d}Z(E),\qquad
\tau\mathcal P(\phi)=\mathcal P\left(\phi+\frac2d\right)
$$

が成り立つ。すなわち$\tau$は半安定性を保ち、位相を一定量だけずらす。

さらに任意の固定対象$A$に対し定数$C\_A>0$が存在し、すべての$E$について

$$
\sum\_{n\in\mathbb Z}\dim\_{\mathbb C}\operatorname{Hom}(A,E[n])\leq C\_A m\_\sigma(E)
$$

となる。$m\_\sigma(E)$はHarder–Narasimhan因子の中心電荷の絶対値の和である。Introductionは$N<d$の場合も後のTheorem 5.6で扱うと述べるが、ここでは明記されたTheorem 1.2の範囲を中心に説明する。

### 半安定対象のproperなモジュライ（Corollary 1.3）

$\mathcal C=\operatorname{Ku}(X)$または$D^b(X)$について、数値類$v$と位相$\phi$を固定し$Z(v)\in\mathbb R\_{>0}e^{i\pi\phi}$とする。その半安定対象のスタックは有限型の代数スタックでアフィン対角を持ち、properなgood moduli algebraic space $M\_\sigma(v,\phi)$を持つ。閉点は半安定対象のS同値類を表し、全対象の同型類を区別するfine moduli spaceという主張ではない。

## 証明の見取り図

一変数の$x^d$の行列因子化圏を型$A\_{d-1}$の箙の導来圏として扱うことから始める。交互向きの箙に対する正の重み$\sin(j\pi/d)/\sin(\pi/d)$を中心電荷へ組み込み、反射関手が位相回転に対応するようにする。

箙の圏のテンソル積上に安定性条件を反復構成し、Thom–Sebastiani同値を通じてFermat多項式の行列因子化圏へ移す。有限群の作用と同変対象を利用して通常の整数次数付き圏に戻す。最後に任意の次数$d$の形式を一次形式の$d$乗の和として表し、十分大きなFermat超曲面の線形切断から、一回ずつGepner対称性を保って安定性条件を移す。モジュライのproper性にはmass–Hom評価と既存の一般定理を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.05350)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.05350v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Definition 1.1, Theorem 1.2, Corollary 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.05350v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
