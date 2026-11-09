---
layout: paper
title: Algebraic Zhou valuations
title_ja: 代数的Zhou付値と跳躍数の特徴づけ
authors: Shijie Bao, Qi'an Guan, Lin Zhou
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: In this paper, we generalize Zhou valuations, originally defined on complex domains, to the framework of general schemes. We demonstrate that an algebraic version of the Jonsson--Musta\c{t}\u{a} conjecture is equivalent to the statement that every Zhou valuation is quasi-monomial. By introducing a mixed version of jumping numbers and Tian functions associated with valuations, we obtain characterizations of a valuation being a Zhou valuation or computing some jumping number using the Tian functions. Furthermore, we establish the correspondence between Zhou valuations in algebraic settings and their counterparts in analytic settings.
topic: algebraic-geometry
tags:
- singularities
- multiplier-ideals-extension
- pluripotential-theory
arxiv_id: 2505.19451v4
arxiv_url: https://arxiv.org/abs/2505.19451
arxiv_submitted: '2025-05-26'
arxiv_updated: '2026-11-05'
summary: 複素解析から生まれたZhou付値を正則excellentスキーム上へ拡張し、漸近跳躍数を計算する付値として位置付ける。一般のイデアルを伴うJonsson–Mustaţă予想をZhou付値の準単項性へ帰着し、Tian関数による判定と解析的Zhou付値との一致を示す。
abstract_en: ''
summary_en: Bao, Guan and Zhou recast an analytic notion of extremal singularity as a valuation-theoretic construction on regular schemes. Their main results identify a distinguished class of valuations sufficient for computing finite asymptotic jumping numbers. The remaining general quasi-monomiality problem is expressed entirely in terms of this class. Mixed jumping numbers also provide a test for membership, and the local complex-analytic construction is recovered as a special case.
abstract_ja: Zhou付値を、イデアル列の漸近跳躍数を用いて代数的に定義し、複素領域に限らない正則スキーム上で研究する。有限の漸近跳躍数はZhou付値で計算でき、すべてのZhou付値が準単項的であるという命題は、一般のイデアルを伴う代数的Jonsson–Mustaţă予想と同値になる。混合跳躍数から作るTian関数の線形性と微分可能性を用いて、跳躍数を計算する付値やZhou付値を特徴づける。複素正則関数芽の局所環では代数的定義と解析的定義が一致する。
abstract_source_url: https://arxiv.org/abs/2505.19451
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.19451v4](https://arxiv.org/abs/2505.19451)
- **著者:** Shijie Bao, Qi'an Guan, Lin Zhou
- **初回投稿日:** 2025-05-26
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

イデアルの特異性を測る跳躍数は、log discrepancyと付値の比の最小化として表せる。しかし、その最小値をどの程度幾何学的に扱いやすい付値で実現できるかは、一般には未解決である。本論文は、この問題を複素解析で導入されたZhou付値と結び付ける。

著者らはZhou付値を代数的な極大性条件で定義し、有限の漸近跳躍数を必ずこのクラスの付値で計算できることを示す。その結果、一般のイデアルを伴うJonsson–Mustaţă予想は、すべてのZhou付値の準単項性と同値になる。予想全体を解決したという主張ではない。

さらに、別のイデアルの重みを変化させた混合跳躍数を考え、そのTian関数の線形性と原点での微分可能性を判定に用いる。複素正則関数芽の場合には、こうした代数的対象からZhou weightを構成し、元の解析的定義と一致することを示す。

## 背景と問題設定

対象は$\mathbb Q$上の分離的、正則、連結、Noetherian excellentスキーム$X$である。非零イデアル$\mathfrak q$と非零次数付きイデアル列$\mathfrak a\_\bullet$について、漸近跳躍数は

$$
\operatorname{lct}^{\mathfrak q}(\mathfrak a\_\bullet)
=\inf\_v\frac{A(v)+v(\mathfrak q)}{v(\mathfrak a\_\bullet)}
$$

で表される。$A(v)$はlog discrepancyである。Conjecture 1.1は、この数が有限なら準単項付値で計算できるという主張であり、Introductionは$\mathfrak q=\mathcal O\_X$や次元2以下の場合を既知として区別する。

Definition 1.3では、付値$v$に付随するイデアル列$\mathfrak a\_\bullet^v$に対して$\operatorname{lct}^{\mathfrak q}(\mathfrak a\_\bullet^v)\leq1$を満たす付値の中の極大元を、$\mathfrak q$に関する代数的Zhou付値と定義する。

## 主結果

### 主定理1：跳躍数と準単項性（Theorem 1.4）

有限の$\operatorname{lct}^{\mathfrak q}(\mathfrak a\_\bullet)$を計算する、$\mathfrak q$に関するZhou付値が存在する。また任意のZhou付値$v$は自分自身のイデアル列の跳躍数を計算し、

$$
A(v)=1-v(\mathfrak q)
$$

を満たす。Conjecture 1.1は、すべてのZhou付値が準単項的であることと同値である。$\mathfrak q=\mathcal O\_X$または$\dim X\leq2$なら、この準単項性が成り立つ。

### 主定理2：Tian関数による判定（Theorem 1.5）

非自明付値$v$について$A(v)<\infty$かつ$\operatorname{lct}^{\mathfrak q}(\mathfrak a\_\bullet^v)<\infty$を仮定する。各非零イデアル$\mathfrak q'$に対し混合跳躍数から

$$
T\_{\mathfrak q'}(t)=\operatorname{lct}(\mathfrak q,t\cdot\mathfrak q';\mathfrak a\_\bullet^v)
$$

を作る。混合跳躍数は、通常の比の分子に$t\operatorname{ord}\_E(\mathfrak q')$を加えて定義され、$t=0$の少し左側にも定義される。

$v$が$\operatorname{lct}^{\mathfrak q}(\mathfrak a\_\bullet^v)$を計算するための必要十分条件は、すべての$\mathfrak q'$で$T\_{\mathfrak q'}$が$[0,\infty)$上線形となることである。さらに$v$が$\mathfrak q$に関するZhou付値であるための必要十分条件は、跳躍数が1であり、この線形性に加えて各$T\_{\mathfrak q'}$が$t=0$で微分可能となることである。原点の両側を見る点が、単に跳躍数を計算する条件との差になる。

### 主定理3：解析的定義との一致（Theorem 1.6）

$\mathcal O\_o$を$\mathbb C^n$の原点での正則関数芽の環、$\mathfrak m$をその極大イデアルとする。非零$\mathfrak q\subset\mathcal O\_o$と$v(\mathfrak m)>0$を満たす付値について、$\mathfrak q$に関する代数的Zhou付値であることと、$|\mathfrak q|^2$に関する解析的Zhou付値であることは同値である。

## 証明の見取り図

Introductionは、混合跳躍数の性質を整備し、次数付きイデアル列を拡大する技法を経てTian関数の判定へ進む構成を説明する。解析との対応では、代数的Zhou付値$v$からZhou weight $\Phi\_v^{\star}$を作り、相対型が

$$
\sigma(\log|f|,\Phi\_v^{\star})=v(f)
$$

を満たすことを示す。Zhou weightの存在を初めから仮定せず、乗数イデアルの強開性を最後の段階で用いる点が、従来の解析的構成との差として強調される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2505.19451)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.19451v4) — Section 1, pp. 1–7（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Definition 1.3; Theorems 1.4–1.6; Conjecture 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.19451v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
