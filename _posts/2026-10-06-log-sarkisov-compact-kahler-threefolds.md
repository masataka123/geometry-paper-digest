---
layout: paper
title: Log Sarkisov Program for strongly $\mathbb{Q}$-factorial compact K\"ahler threefolds
title_ja: 強Q分解的コンパクトKähler三次元空間のlog Sarkisovプログラム
authors: Swapnajit Das, Roktim Mascharak
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  We establish the log Sarkisov Program for strongly $\mathbb{Q}$-factorial compact K\"ahler threefolds.
topic: algebraic-geometry
tags:
- birational-geometry
- minimal-model-program
- singularities
- complex-analytic-spaces
arxiv_id: 2610.05158v1
arxiv_url: https://arxiv.org/abs/2610.05158
arxiv_submitted: '2026-10-04'
arxiv_updated: '2026-10-04'
summary: |-
  強Q分解的なklt特異点を持つコンパクトKähler三次元空間について、log MMPで関係するMoriファイバー空間間の双有理型写像をSarkisovリンクへ分解する。原論文のlogカテゴリーのパラメータを1未満に一様制御する条件の下で分解の有限性を示し、カレントをmoduli partとする一般化対の閾値のACCを停止性に用いる。
abstract_en: ''
summary_en: |-
  Different outcomes of a minimal model program need a controlled way to be compared. This paper develops such a comparison for log Mori fibre spaces in the compact Kähler threefold setting. Currents replace part of the divisor-based machinery used in the projective theory. The termination argument relies on an ascending-chain statement for generalized log canonical thresholds and retains the parameter restriction stated in the main theorem.
abstract_ja: 強Q分解的なコンパクトKähler三次元空間に対して、log Sarkisovプログラムを確立する。
abstract_source_url: https://arxiv.org/abs/2610.05158
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05158v1](https://arxiv.org/abs/2610.05158)
- **著者:** Swapnajit Das, Roktim Mascharak
- **初回投稿日:** 2026-10-04
- **最終更新日:** 2026-10-04
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

極小モデル・プログラム（MMP）を進めると、選んだ収縮の列によって異なるMoriファイバー空間が得られることがある。それらの出力を標準的な変換の列で比較するのがSarkisovプログラムである。本論文は、この比較をコンパクトKähler三次元のlog設定へ拡張する。

著者らは、強Q分解性とklt特異点を仮定し、log MMPによって関係する二つのMoriファイバー空間の間の双有理型写像を扱う。原論文で構成するlog bimeromorphic categoryのパラメータが1未満の定数で一様に抑えられる場合に、標準的なリンクへの有限分解を与える。

射影的な場合の議論をそのまま移すだけでは済まない。豊富な因子の代わりにKähler類を使うと、その双有理変換をカレントとして扱う必要がある。停止性には、この解析的な一般化対の設定に合わせた一般化log canonical閾値のACCを用いる。

## 背景と問題設定

Introductionは、MMPの異なる極小モデルをflopで結ぶ問題と、異なるMoriファイバー空間をSarkisovリンクで結ぶ問題を対比する。射影多様体では後者は既知であり、Kähler MMPの発展に伴って非射影的な場合にも同じ比較が必要となる。

対象は三次元のlog Moriファイバー空間

<div>
$$
(X,B_X)\longrightarrow S,
\qquad
(X',B_{X'})\longrightarrow S'
$$
</div>

と、それらの間の双有理型写像 $\Phi:X\dashrightarrow X'$ である。strongly $\mathbb Q$-factorialという原論文の強Q分解性は、通常のQ分解性へ勝手に弱めない。

## 主結果

### 主定理：log Sarkisovリンクへの有限分解（Theorem 1.1）

Introductionでは概略として次のように述べられている。強Q分解的なklt特異点を持つ三次元log Moriファイバー空間の間で、log MMPの関係から誘導される $\Phi$ に対し、log bimeromorphic category $\mathcal C_\theta$ を構成できる。その全ての $\theta$ の値が、ある固定した

<div>
$$
0\leq\varepsilon\lt 1,\qquad \theta\leq\varepsilon
$$
</div>

を満たす限り、$\Phi$ を四種類の標準Sarkisovリンクの有限合成へ分解するアルゴリズムがある。

すなわち、適切な中間Moriファイバー空間を介して

<div>
$$
\Phi=\Phi_m\circ\cdots\circ\Phi_1
$$
</div>

と表し、各 $\Phi_i$ を原論文のtype I–IVのリンクとして扱える。$\mathcal C_\theta$ の構成や各パラメータの完全な定義は本文Section 3で与えられるため、本記事ではIntroductionの条件を保持して述べ、任意の双有理型写像に対する無条件の分解へ読み替えない。

### 非射影的な場合のリンクの制限

Introductionは、強Q分解的な非射影コンパクトKähler三次元空間では、Sarkisov分解にtype IVのリンクが現れないことも述べる。一般の四種類の枠組みを保ちながら、非射影性によって実際に必要なリンクの種類が制限される。

## 証明の見取り図

基本戦略は三次元射影log Sarkisovプログラムに従うが、豊富な因子をKähler類へ置き換える。Kähler類のhomaloidal transformが閉 $b$-$(1,1)$-カレントとなるため、moduli partをカレントで表す一般化対を導入し、その上でSarkisov degreeを定義する。

この次数を使ってリンクを構成した後、無限に変換が続かないことが主要な課題となる。著者らは、有理特異点を持つFujiki class $\mathcal C$ のコンパクト複素空間で、一般化log canonical閾値について必要なACCを示し、リンク列の停止へ適用する。ACCは閾値の狭義増大列を制約する性質であり、ここではアルゴリズムの有限性を支える役割を持つ。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05158](https://arxiv.org/abs/2610.05158)。公式Abstractは一文であり、PDF冒頭には独立したAbstract欄がない。
- **Introduction:** Section 1、pp. 1–3。主定理と四種類のリンクの図式はp. 2。
- **主要定理:** Theorem 1.1。$\mathcal C_\theta$ の詳しい定義や後続節の証明は精読範囲に含めていない。
- **論文構成:** p. 3。Section 3でリンク分解、Section 4で閾値のACC、Section 5で停止性を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
