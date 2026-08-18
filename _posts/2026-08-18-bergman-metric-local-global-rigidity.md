---
layout: paper
title: "A new strong rigidity phenomenon for the Bergman metric"
title_ja: "Bergman計量に対する新しい強剛性現象"
authors: "Peter Ebenfelt, John N. Treuer, Ming Xiao"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We establish a new local-to-global rigidity phenomenon for the Bergman metric. Namely, under natural geometric hypotheses, a local conformal identification of Bergman metrics determines the underlying complex manifold globally, up to the unavoidable ambiguity of removing Bergman-negligible subsets. More precisely, let $Ω\subseteq\mathbb C^n$ be a bounded domain with a complete Bergman metric, and suppose that the Bergman metric of a complex manifold $M$ is locally conformal, via a holomorphic map $f$, to that of $Ω$. We prove that the given local map $f$ extends to a biholomorphism $F\colon M\to D$ onto a subdomain $D\subseteqΩ$ in two complementary settings. If $M$ is Stein, then $Ω\setminus D$ is a closed pluripolar set. If $M$ is a bounded domain and $Ω$ satisfies a natural symmetry condition expressed in terms of its automorphism orbits, then $Ω\setminus D$ is Bergman-negligible. In particular, this applies when $Ω$ is a bounded homogeneous domain and yields a characterization, up to Bergman-negligible sets, of bounded domains with locally symmetric Bergman metrics. The latter answers a question raised by Loi--Palmieri and Zimmer. A key ingredient in the proof is a new Calabi-type extension theorem tailored to Bergman metrics.
topic: several-complex-variables
tags:
  - stein-geometry
  - curvature
arxiv_id: "2608.15998v1"
arxiv_url: "https://arxiv.org/abs/2608.15998"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  Bergman計量の局所的な共形同一視が、薄い集合を除く大域的双正則同型へ延長する条件を与える。
  sourceがSteinの場合とmodel domainが十分な対称性を持つ場合を扱い、局所対称Bergman計量を持つ有界領域の特徴づけも得る。
abstract_en: ""
summary_en: >-
  This work asks how much global holomorphic geometry is determined by a local conformal identification of Bergman metrics. It proves extension to a biholomorphism onto a subdomain when the source is Stein, with a closed pluripolar complement. A complementary theorem treats bounded sources and sufficiently symmetric complete model domains, where the omitted set is invisible to the Bergman space. The argument develops a Calabi-type continuation theorem adapted to Bergman geometry.
abstract_ja: >-
  完備Bergman計量を持つ有界領域をmodelとし、複素多様体のBergman計量が局所的にその計量と共形に同一視される状況を考える。sourceがSteinなら局所写像はmodel領域の部分領域への双正則同型に延長し、補集合は閉pluripolar集合になる。sourceが有界領域でmodel側の自己同型orbitに十分な対称性がある場合も同様の延長が成立し、補集合はBergman-negligibleとなる。これにより局所対称なBergman計量を持つ有界領域も、無視できる集合を除いて特徴づけられる。
abstract_source_url: "https://arxiv.org/abs/2608.15998"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.15998](https://arxiv.org/abs/2608.15998)
- **著者:** Peter Ebenfelt, John N. Treuer, Ming Xiao
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日（v1）
- **主分類・副分類:** math.CV（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bergman計量は $L^2$ 正則関数・正則形式から定まり、双正則写像に不変である。本論文は逆向きに、Bergman計量の局所的な共形同一視から複素多様体の大域的な双正則構造をどこまで復元できるかを問う。

完全な復元を妨げる本質的な曖昧さはBergman-negligible集合である。この集合を除去しても $L^2$ 正則関数が元の領域へ延長するため、Bergman空間と計量は変化しない。したがって、局所計量からこの差を検出することは原理的にできない。

著者らは二つの相補的な場合に、この曖昧さが唯一のものだと示す。sourceがStein多様体なら補集合は閉pluripolar集合にまで絞られ、model領域が自己同型群について十分対称なら、sourceはmodelからBergman-negligible集合を除いた領域と双正則になる。

特に有界対称領域をmodelに取ることで、局所対称Bergman計量を持つ有界領域をBergman-negligible集合の除去を除いて特徴づける。これはLoi--PalmieriとZimmerの問いに答える。

## 背景と問題設定

領域 $\Omega$ の閉零測度集合 $E$ がBergman-negligibleであるとは、$\Omega\setminus E$ 上のすべてのBergman空間の関数が $\Omega$ へ正則延長することをいう。閉pluripolar集合はその基本例だが、実超曲面の小片のようなより大きな例もありうる。

$M$ と完備Bergman計量を持つ有界model domain $\Omega\subset\mathbb C^n$ の開集合上で

$$
\omega_M=\Lambda f^*\omega_\Omega
$$

が成り立つとき、局所写像 $f$ が $M$ 全体から $\Omega$ の部分領域への双正則写像に延びるかが中心問題である。$n\ge2$ ではKähler条件から正関数 $\Lambda$ は定数になるが、その値が1であることも証明の課題となる。

## 主結果

### Stein sourceの場合（Theorem 1）

$M$ をBergman計量が定義された $n$ 次元Stein多様体、$\Omega\subset\mathbb C^n$ を完備Bergman計量を持つ有界領域とする。連結開集合 $U\subset M$ 上の正則写像 $f:U\to\Omega$ が

$$
\omega_M=\lambda f^*\omega_\Omega,\qquad \lambda>0
$$

を満たすなら、$f$ は双正則写像 $F:M\to D\subset\Omega$ に延長し、$\Omega\setminus D$ は閉pluripolar集合である。$n\ge2$ では $\lambda$ を任意の正関数に置き換えてよい。

### 対称性を持つmodelの場合（Theorem 2）

$M\subset\mathbb C^n$ を有界領域、$\Omega$ を完備Bergman計量を持つ有界領域とする。$\Omega$ の解析的Zariski稠密な点集合上で、各自己同型orbitが非定数正則曲線を含むと仮定する。局所的に $\omega_M=\Lambda f^*\omega_\Omega$ なら、$f$ は $F:M\to D\subset\Omega$ に延長し、$\Omega\setminus D$ はBergman-negligibleである。

### 局所対称領域の特徴づけ（Corollary 4）

$n\ge2$ の有界領域 $M$ のBergman計量が局所対称なら、ある有界対称領域 $\Omega$ とBergman-negligible集合 $E$ が存在して

$$
M\cong\Omega\setminus E
$$

となる。

## 証明の見取り図

単位球ではBergman kernelの明示式と射影Hilbert空間へのKähler immersionが使えるが、一般のmodel domainではどちらも利用できないことがある。論文はこの障害を避けるため、Bergman計量に適合した新しいCalabi型延長定理を構築する。

Steinの場合はこの延長定理と解析接続により局所写像を大域化する。対称modelの場合は、まず自己同型orbitの正則曲線と解析的Zariski稠密性を使って共形定数を $1$ と示し、exact local isometryの場合の一般的延長定理へ帰着する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.15998](https://arxiv.org/abs/2608.15998)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1, 2, 5; Corollaries 3, 4
- **論文構成の説明:** Section 1, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
