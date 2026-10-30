---
layout: paper
title: The universal family of punctured Riemann surfaces is Stein
title_ja: 穿孔Riemann面の普遍Teichmüller族のStein性
authors: Franc Forstneric
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We show that the universal Teichm\"uller family of n-punctured compact Riemann surfaces of genus g is a Stein manifold for any n>0. We describe its basic function theoretic properties and pose several challenging questions. We show in particular that the space of fibrewise algebraic functions on the universal family is dense in the space of holomorphic functions, and there is a fibrewise algebraic map of the universal family in a Euclidean space which restricts to a proper embedding on every fibre. We also obtain a relative Oka principle for holomorphic fibrewise algebraic maps of the universal family to any flexible algebraic manifold.
topic: several-complex-variables
tags:
- stein-geometry
- oka-theory
- moduli
arxiv_id: 2511.07963v5
arxiv_url: https://arxiv.org/abs/2511.07963
arxiv_submitted: '2025-11-11'
arxiv_updated: '2026-04-22'
summary: 少なくとも一つの穿孔を持つコンパクトRiemann面の普遍Teichmüller族について、その全空間がSteinであることを示す。さらにファイバーごとの代数関数による近似と埋め込み、Oka多様体への写像の拡張を扱い、複素構造を動かしながら関数を選ぶための基盤を与える。
abstract_en: We show that the universal Teichm\"uller family of n-punctured compact Riemann surfaces of genus g is a Stein manifold for any n>0. We describe its basic function theoretic properties and pose several challenging questions. We show in particular that the space of fibrewise algebraic functions on the universal family is dense in the space of holomorphic functions, and there is a fibrewise algebraic map of the universal family in a Euclidean space which restricts to a proper embedding on every fibre. We also obtain a relative Oka principle for holomorphic fibrewise algebraic maps of the universal family to any flexible algebraic manifold.
summary_en: ''
abstract_ja: 種数gが非負で、穿孔数nが正である有限型Riemann面の普遍Teichmüller族について、全空間のStein性を証明する。各ファイバー上で代数的となる正則関数は全正則関数の空間に稠密であり、ファイバー上で代数的な正則写像によるEuclid空間への適切な埋め込みも得られる。flexibleな代数多様体を標的とするファイバーごとの代数写像について、相対Oka原理を導く。
abstract_source_url: https://arxiv.org/abs/2511.07963
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.07963v5](https://arxiv.org/abs/2511.07963)
- **著者:** Franc Forstneric
- **初回投稿日:** 2025-11-11
- **最終更新日:** 2026-04-22
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

有限型の開Riemann面はそれぞれSteinであり、その複素構造をパラメータ化するTeichmüller空間もSteinである。しかし、基底とファイバーのStein性だけから全空間のStein性を結論することはできない。本論文は、穿孔を持つコンパクトRiemann面の普遍族について、この全空間の問題を解決する。

主定理は、種数に制約を課さず、穿孔が少なくとも一つあれば普遍族がSteinとなるというものである。強多重劣調和exhaustionの構成に加え、ファイバーごとの代数関数を使う証明も与える。後者はStein性を示すだけでなく、正則関数の近似やファイバーごとの適切な埋め込みにつながる。

全空間がSteinであることから、Oka多様体を値域とする写像に通常のOka原理を適用できる。各ファイバー上の写像を族全体へ拡張できること、正則ベクトル束が自明になることなどが帰結する。一方、各ファイバー上で浸入となる正則関数を族として選ぶ問題は未解決として残される。

## 背景と問題設定

種数 $g\geq0$、穿孔数 $n\geq1$ のTeichmüller空間を $T(g,n)$ とする。コンパクトRiemann面の族 $\widehat V(g,n)\to T(g,n)$ に、穿孔に対応する互いに交わらない正則切断 $s\_1,\ldots,s\_n$ があり、研究対象は

$$
V(g,n)=\widehat V(g,n)\setminus\bigcup\_{i=1}^{n}s\_i(T(g,n))
$$

である。$2g+n\geq3$ では、位相的マーキングを持つ正則族の普遍対象になる。穿孔を取り除く前の族はコンパクトなファイバーを持ち、その正則関数は基底から来る。したがって、穿孔を除いた全空間に十分な正則関数が存在するかが中心問題である。

## 主結果

### 主定理：普遍族のStein性（Theorem 1.1）

すべての $g\geq0$ と $n\geq1$ に対して、$V(g,n)$ はStein多様体である。条件は有限型であることと穿孔の存在であり、$n=0$ のコンパクトファイバーの族を含む主張ではない。$g=0$ かつ $n=1,2,3$ では基底が一点であり、全空間はそれぞれ $\mathbb C$、$\mathbb C^\ast$、$\mathbb C\setminus\lbrace 0,1\rbrace $ となる。

### ファイバーごとの代数関数による近似と埋め込み

IntroductionはTheorem 3.2の結論として、ファイバーごとに代数的な正則関数の代数 $\mathcal A(V(g,n))$ が

$$
\overline{\mathcal A(V(g,n))}=\mathcal O(V(g,n))
$$

を満たすと述べる。閉包はcompact-open位相で取る。また、ある $N$ に対して正則かつファイバーごとに代数的な写像 $V(g,n)\to\mathbb C^N$ が存在し、各ファイバーへの制限は適切な埋め込みとなる（Theorem 3.4）。基底のStein性を合わせると、全空間の適切な正則埋め込みもファイバーごとに代数的に選べる（Corollary 3.5）。ここではIntroductionにない最小の $N$ は主張しない。

### Oka標的への拡張（Corollary 1.2）

$Y$ がOka多様体なら、任意の連続写像 $V(g,n)\to Y$ のホモトピー類に正則写像が存在する。さらに、一つのファイバー $M\_t$ 上の正則写像 $M\_t\to Y$ は族全体の正則写像へ拡張する。

相対版では、閉複素部分多様体とは限らない閉複素部分空間 $T'\subset T(g,n)$ 上、すなわち $\pi^{-1}(T')$ 上で既に正則な連続写像を、その部分を固定したまま全体で正則な写像へ変形できる。これは基底の可縮性によるファイバーと全空間のホモトピー同値、およびStein源上のOka原理を組み合わせた結論である。

### 束の自明性と未解決の浸入問題（Proposition 1.4、Problem 1.6）

$V(g,n)$ 上のすべての正則ベクトル束は正則に自明である。全空間がファイバーと同じホモトピー型を持ち、穿孔Riemann面の位相が一次元CW複体で表されることから位相的自明性を得て、Oka–Grauert原理を適用する。ただし、各ファイバー上の代数的ベクトル束まで自明であるとは限らない。

特に垂直接束に零点のない正則ベクトル場を選べる。しかし $g\geq1$ のとき、すべてのファイバーに制限して浸入となる正則関数 $V(g,n)\to\mathbb C$ を選べるかはProblem 1.6として残る。単に全空間上で臨界点を持たない関数があることとは異なる問題である。

## 証明の見取り図

Introductionは三つのStein性の証明を説明する。第一は強多重劣調和exhaustionを作り、GrauertのStein性判定を適用する方法である。第二はGrauertの固有直接像の連接性を使い、ファイバーごとの代数関数による点分離と正則凸性を示す方法である。第三はファイバーごとの代数的埋め込みと基底のStein性から全空間の適切な埋め込みを得る方法である。

後続の相対Oka原理は、代数的にspecial ellipticな標的、特にflexibleな代数多様体へのファイバーごとの代数写像を扱う。IntroductionではTheorem 4.1への案内として述べられているため、ここではその精密なパラメータ条件を補っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2511.07963)
- **Introduction:** [PDF](https://arxiv.org/pdf/2511.07963v5) — Section 1, pp. 1–4（Section 2開始前）
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollaries 1.2, 1.3, 1.5; Proposition 1.4; Problem 1.6; Theorems 3.2, 3.4, 4.1へのIntroduction中の言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2511.07963v5
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
