---
layout: paper
title: "Birational boundedness of stable families"
title_ja: "安定族の双有理有界性"
authors: "Paolo Cascini, Jihao Liu, Calum Spicer, Roberto Svaldi"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DS
arxiv_abstract: >-
  We prove that normal projective stable families of maximal variation, of fixed dimension, and with
  bounded adjoint volume are birationally bounded. This is a consequence of a substantially stronger
  statement, formulated a priori independently of stable families: algebraically integrable foliations
  of fixed dimension and bounded adjoint volume are log birationally bounded. In this way, the
  birational geometry of foliations provides a systematic framework for approaching classical
  boundedness problems for fibrations. A key input is our proof of M\textsuperscript{c}Kernan's ACC
  conjecture for interpolated log canonical thresholds of algebraically integrable foliations. This
  may be viewed as the foliated analogue of Shokurov's ACC conjecture for log canonical thresholds,
  proved in the classical setting by Hacon--M\textsuperscript{c}Kernan--Xu. As applications, we
  establish two boundedness criteria for Fano algebraically integrable adjoint foliated structures:
  Birkar's criterion for exceptional Fanos, and Jiang's criterion for Fanos for which both Tian's
  $α$-invariant and the anti-canonical volume are bounded away from zero. We also obtain several
  results on the birational geometry of algebraically integrable adjoint foliated structures,
  including lower bounds for adjoint volumes, boundedness of automorphism groups, and ACC theorems for
  pseudo-effective thresholds, $\mathbb{R}$-complementary thresholds, and the Fano spectrum.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - vector-bundles-sheaves
  - foliations
arxiv_id: "2604.24106v1"
arxiv_url: "https://arxiv.org/abs/2604.24106"
arxiv_submitted: "2026-04-27"
arxiv_updated: "2026-04-27"
summary: >-
  最大変動を持つ正規射影的安定族について、次元固定かつ補間随伴体積が上から有界なら全空間が双有理有界となることを示す。より強い葉層版の有界性と、代数的可積分葉層に対する補間log canonical thresholdのACCが核心である。
abstract_en: ""
summary_en: >-
  The paper establishes an intrinsic birational boundedness theorem for maximal-variation stable families using an interpolation between the relative and absolute canonical divisors. Its broader framework proves log birational boundedness for algebraically integrable foliations with controlled adjoint volume. A central input is an ACC theorem for interpolated log canonical thresholds in the algebraically integrable case. The results also yield boundedness criteria and threshold statements for Fano adjoint foliated structures.
abstract_ja: >-
  固定次元・最大変動の正規射影的安定族について、相対標準因子と絶対標準因子を補間した随伴因子の体積が上から有界なら、全空間が双有理有界になることを証明する。この結果は、固定次元・有界随伴体積を持つ代数的可積分葉層のlog双有理有界性から従う。主要な技術は、代数的可積分葉層に対する補間log canonical thresholdがACCを満たすというMcKernan予想の該当部分の証明である。
abstract_source_url: "https://arxiv.org/abs/2604.24106"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.24106v1](https://arxiv.org/abs/2604.24106v1)
- **著者:** Paolo Cascini, Jihao Liu, Calum Spicer, Roberto Svaldi
- **初回投稿日・最終更新日:** 2026年4月27日（v1）
- **主分類・副分類:** math.AG（主分類）、math.DS
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

安定多様体やFano多様体では有界性理論が発達しているが、ファイバー構造を持つ多様体では相対標準因子$K_{X/T}$を絶対標準因子の代わりに使う素朴な方法が破綻する。$K_{X/T}$はbigかつnefでもsemi-ampleとは限らず、相対多重標準系の一様な双有理性もなく、体積を固定してさえ族が非有界になりうる。

本論文は補助的な偏極を固定せず、族自身の標準データだけを使うため、

$$
K_t=tK_{X/T}+(1-t)K_X,\qquad 0<t<1
$$

を導入する。最大変動の安定族では次元だけに依存する$t$を一様に選んで$K_t$をbigにでき、その体積を上から抑えれば全空間を双有理有界にできる。

さらに、ファイブレーションが定める代数的可積分葉層へ移ることで、より強いlog双有理有界性を証明する。この枠組みでは双有理変形に対してファイバー構造を追跡でき、相対標準因子だけで生じる障害を回避する。

一様な$t$の存在を支えるのが、補間log canonical thresholdに関するACCである。これはShokurovの通常のlctに対するACCの葉層版であり、論文は代数的可積分葉層の場合のMcKernan予想を証明する。

## 背景と問題設定

安定族$f:X\to T$はKSBAモジュライの基本対象であり、有限基底変換後には最大変動の安定族からの引き戻しとして表せる。しかし$K_{X/T}$だけでは標準模型・有効双有理性・有界性のいずれも一般には確保できない。論文の問いは、ファイバーや基底に偏極を追加せず、内在的な標準因子の情報だけで双有理有界性を得られるか、というものである。

ファイブレーションの葉に沿う接方向は代数的可積分葉層$\mathcal F$を定め、安定族では$K_{\mathcal F}=K_{X/T}$となる。これにより問題をadjoint foliated structure $(X,\mathcal F,t)$の特異点と体積の制御へ翻訳する。

## 主結果

### 安定族の双有理有界性（Theorem A）

正整数$d$に対し、$d$だけに依存する$t(d)\in(0,1)$が存在する。$f:X\to T$が最大変動の安定族で、$X$が正規射影的かつ$\dim X=d$なら、$K_t$はbigである。さらに

$$
\operatorname{vol}(K_t)\leq C
$$

なら、$X$は双有理有界な族をなす。$T$が一点ならHacon–McKernan–Xuの古典的な双有理有界性を回収する。

### 代数的可積分葉層のlog双有理有界性（Theorem B）

$d$、DCC集合$\Gamma\subset(0,1)$、$C>0$を固定する。ある$t\in\Gamma$について$(X,\mathcal F,t)$がlcであり、

$$
0<\operatorname{vol}\!\left(K_X+\frac{t}{1-t}K_{\mathcal F}\right)\leq C
$$

を満たす$d$次元射影的代数可積分foliated pair $(X,\mathcal F)$はlog双有理有界である。Theorem Aは安定族が誘導する葉層にこれを適用して従う。

### 補間lctのACC（Theorem D）

$X$と$\mathcal F$が$\mathbb Q$-Gorensteinで、$\mathcal F$が代数的可積分、$\dim X=d$であるとき、

$$
\operatorname{lct}(X;\mathcal F)=\sup\{t\geq0\mid(X,\mathcal F,t)\text{ is log canonical}\}
$$

の集合はACCを満たす。これがTheorem Aの一様な補間係数を生み、有効双有理性から有界性へ進む技術的な核となる。

## 証明の見取り図

Introductionは、まずglobal ACCとlocal ACCを随伴公式で結び、代数的可積分葉層に対するTheorem Dを証明する流れを示す。そこから擬有効閾値のACCと一様な補間係数$t$を得て、adjoint foliated structureの有効双有理性を確立し、最終的にlog双有理有界性へ到達する。安定族には誘導葉層と$K_{\mathcal F}=K_{X/T}$を用いてTheorem Bを適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.24106v1](https://arxiv.org/abs/2604.24106v1)
- **Introduction:** Section 1, pp. 1–7
- **Introduction中の主要結果:** Theorems A, B, D（およびConjecture C）
- **論文構成:** Section 2が応用と証明概略、Sections 4–10がACC・有効双有理性・有界性
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
