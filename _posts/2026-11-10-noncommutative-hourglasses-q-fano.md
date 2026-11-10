---
layout: paper
title: 'Noncommutative Hourglasses I: On the Classification of Q-Fano 3-Folds of Gorenstein Index 2 via Derived Categories'
title_ja: Q-Fano三次元多様体のSarkisovリンクと導来圏
authors: Xingbang Hao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In previous work, Takagi used the methods of solving the Sarkisov links by calculating the corresponding Diophantine equations and the construction of key varieties to give all possible classifications and some implementations of a class $\mathbb{Q}$-Fano 3-fold with Fano index 1/2 and at worst $(1, 1, 1)/2$ or QODP singularities. Firstly, we use a method different from Kawamata's work to give the derived category formulas for general weighted blow-up and Kawamata weighted blow-up. On this basis, we study the changing behavior of the derived category of Takagi's varieties under Sarkisov links. Finally, by studying non-commutative projections, we give exceptional collections on the derived category of Takagi's varieties and their corresponding geometric meanings.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- singularities
- minimal-model-program
arxiv_id: 2501.17454v2
arxiv_url: https://arxiv.org/abs/2501.17454
arxiv_submitted: '2025-01-29'
arxiv_updated: '2026-11-07'
summary: Gorenstein指数2の特異Q-Fano三次元多様体を、重み付き爆発とSarkisovリンクに沿う導来圏の変化から調べる。例外的対象と残余圏を分離し、Takagiの分類に現れる多様体の幾何を非可換な圏の構造として記述する。
abstract_en: ''
summary_en: Hao studies singular Fano threefolds by following their derived categories through birational links. The foundational step makes weighted blow-up decompositions explicit using canonical stacks and point objects. These formulas identify a persistent residual category in Takagi’s hourglass examples. Exceptional collections then acquire interpretations through projections, subject to the geometric hypotheses stated in the paper.
abstract_ja: Takagiが分類したFano指数1/2のQ-Fano三次元多様体を対象に、重み付き爆発・Kawamata爆発の導来圏公式を具体化する。それをSarkisovリンクに適用し、残余圏と例外的集成の幾何学的意味を調べる。特に商特異点を持つhourglass型について、対応する曲線の導来圏と行列因子化圏により残余部分を記述する。
abstract_source_url: https://arxiv.org/abs/2501.17454
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2501.17454v2](https://arxiv.org/abs/2501.17454)
- **著者:** Xingbang Hao
- **初回投稿日:** 2025-01-29
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

滑らかなFano三次元多様体では、例外的集成や残余圏がその幾何を表す重要な道具となる。商特異点を持つ場合には、通常の多様体だけでなくcanonical stackを介して導来圏を扱うことが自然になる。

本論文はTakagiのQ-Fano三次元多様体の分類を出発点に、重み付き爆発、flop、flip、収縮からなるSarkisovリンクを導来圏の言葉で追う。基礎となる爆発公式を具体的に証明した上で、例外的部分とリンクに沿って残る部分を分離する。

狙いは、分類に現れる多様体をすべて新しく列挙することではなく、そこにある圏の構造と例外的対象の幾何学的意味を理解することにある。完全例外的集成が得られるのは追加条件を満たす場合であり、全Q-Fano多様体についての無条件の存在定理ではない。

## 背景と問題設定

IntroductionのTakagi型の設定では、$X$は$\mathbb Q$-factorialなQ-Fano三次元多様体で、

$$
\rho(X)=1,\quad I(X)=2,\quad F(X)=\frac12,\quad h^0(-K\_X)\geq4
$$

を満たす。さらに指定された指数2の点を持ち、その局所形に沿って重み付き爆発を行う。$I(X)$はGorenstein指数、$F(X)$は論文のCartier Fano指数であり、両者を混同しない。

主な応用では、TakagiのTable 1にある商特異点のみを持つ$X\_{1,i}$をhourglassと呼ぶ。$\widetilde X$は商特異点を記録するcanonical stack、$D^b$は有界導来圏を表す。

## 主結果

### 主定理1：滑らかな中心の重み付き爆発（Theorem 1.1）

滑らかな$X$を余次元$c$の滑らかな中心$S$で、論文のwell-formed条件を満たす重み$(a\_1,\ldots,a\_c)$により爆発し、得られる$Y$のcanonical stackを$\widetilde Y$とする。このとき

$$
D^b(\widetilde Y)\simeq
\langle\operatorname{Im}\Psi\_{-\sum\_i a\_i+1},\ldots,
\operatorname{Im}\Psi\_{-1},\operatorname{Im}\Psi\rangle
$$

という半直交分解を得る。$\Psi$は引き戻し、$\Psi\_j$は例外因子上へ引き戻して$\mathcal O(j)$で捩り、全空間へ押し出す関手である。従来知られていた公式を具体的な証明とともに扱う部分である。

### 主定理2：巡回商中心とKawamata爆発（Theorem 1.2）

中心が$(a\_1,\ldots,a\_c)/r$型の巡回商で、論文に指定された大域的な指標の分裂と重み付き法データ、整合する爆発の重みを仮定する。$s=\sum\_i a\_i$と書けば、$r<s$では

$$
D^b(\widetilde Y)\simeq
\langle\operatorname{Im}\Theta\_{r-s},\ldots,
\operatorname{Im}\Theta\_{-1},\operatorname{Im}\Theta\rangle,
$$

$r=s$では$D^b(\widetilde Y)\simeq D^b(\widetilde X)$、$r>s$では逆向きに

$$
D^b(\widetilde X)\simeq
\langle\operatorname{Im}\Phi\_{r-s},\ldots,
\operatorname{Im}\Phi\_1,\operatorname{Im}\Phi\rangle
$$

となる。$\Theta,\Phi$はroot stackを含む対応からの引き戻しと押し出しによる関手である。大域データの詳細はSection 4.3に指定されているため、Introductionの局所特異点型だけで無条件に適用できるとは解釈しない。

### 主定理3：hourglassの残余圏（Theorem 1.3）

上記のhourglass $X\_{1,i}$には

$$
D^b(\widetilde X\_{1,i})\simeq
\langle\operatorname{Res}\_{1,i},\operatorname{Exc}\_{1,i}\rangle,
\qquad
\operatorname{Res}\_{1,i}\simeq
\langle D^b(C\_{1,i}),\operatorname{MF}(\widetilde X'\_{1,i})\rangle
$$

という分解がある。$\operatorname{Exc}\_{1,i}$は例外的集成で、$C\_{1,i}$と$X'\_{1,i}$はリンク終端の爆発中心と多様体である。曲線の種数が0で、行列因子化圏が退化する場合には完全例外的集成を得る。

### 非可換射影の意味（Proposition 1.4、Corollary 1.3.1）

射影点を通るstacky lineから生成される部分圏$\mathcal L$を除くと、リンク中間点$Z$の圏との間に

$$
D^b(\widetilde X)/\mathcal L\simeq
D^b(\widetilde Z)/\langle\mathcal O\_A(-1)\rangle
$$

という比較を得る。これにより、中間点のperfectな例外的対象を元へ戻す構成を説明する。ただしCorollary 1.3.1には共通モデル・局所incidence・相互半直交性などの条件があり、任意の例外的集成を無条件に引き戻せるとは述べない。

## 証明の見取り図

商特異点の局所群の表現を、例外ファイバー上の双対例外的集成と対応させる。そのために、skyscraper層の三角関手による像に有限のPostnikovフィルトレーションを与える。座標上のray divisorの変換を追うKawamataの方法に対し、点対象の挙動を直接追う点が特徴である。

爆発とflipの公式をSarkisovリンクへ適用し、mutationを通して残余圏を比較する。さらに射影とunprojectionを使い、残る例外的対象をstacky lineや中間点の幾何と結び付ける。非可換群への拡張などは将来の課題として区別される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2501.17454)
- **Introduction:** [PDF](https://arxiv.org/pdf/2501.17454v2) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Propositions 1.1–1.4; Corollary 1.3.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2501.17454v2
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
