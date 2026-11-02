---
layout: paper
title: Asymptotic GIT-stability of KSB-stable varieties
title_ja: KSB安定多様体のHodge束による漸近GIT安定性
authors: Sándor J Kovács, Behrouz Taji
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that KSB-stable varieties introduced by Koll\'ar and Shepherd-Barron as a generalization of Deligne-Mumford's stable curves are stable in the sense of geometric invariant theory (GIT). More precisely, we show that KSB-stable varieties are asymptotically GIT-stable with respect to a sequence of linearizations defined by the Hodge bundle.
topic: algebraic-geometry
tags:
- moduli
- positivity
- singularities
- vector-bundles-sheaves
arxiv_id: 2610.40583v1
arxiv_url: https://arxiv.org/abs/2610.40583
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 特異点を許すKSB安定多様体をGIT商によって扱うための線形化を構成する。標準的なPlücker線形化とは異なるHodge束由来の列を用い、半正値性から漸近GIT安定性へ至る一般的な判定も示す。
abstract_en: ''
summary_en: The central issue is how to choose a linearization when constructing moduli of singular stable varieties by GIT. The paper uses determinant bundles arising from pluricanonical direct images to build suitable choices. Its argument extends positivity over reduced bases, including bases that are not normal. This leads to a quotient description while retaining a distinction from the usual Hilbert-scheme linearizations.
abstract_ja: 高次元の安定多様体のモジュライをGIT商として表す際、線形化の選択が障害になる。著者らはHodge束の行列式を組み合わせた線形化の列を用いて、KSB安定多様体の漸近GIT安定性を示す。その基礎として、適切なモジュライ関手の半正値性を、任意の被約準射影底上の直像層の弱正値性へ結びつける。従来の標準線形化についての不安定性の結果と矛盾する主張ではない。
abstract_source_url: https://arxiv.org/abs/2610.40583
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40583v1](https://arxiv.org/abs/2610.40583)
- **著者:** Sándor J Kovács, Behrouz Taji
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

KSB安定多様体は、Deligne–Mumford安定曲線を高次元へ一般化する対象である。そのモジュライ空間の構成には深い双有理幾何が使われてきたが、GIT商として実現するには、どの線束で安定性を測るかという問題が残る。

著者らは、Hodge束に由来する線形化の列を選び、すべてのKSB安定多様体がその列に関して漸近GIT安定になると示す。Mumfordの標準線形化で特異なKSB安定多様体の漸近半安定性が失敗するという先行結果を否定するのではなく、線形化を変えることで障害に対応する。

鍵となるのは、多重標準層の直像の弱正値性を、正規とは限らない被約準射影底へ広げることである。著者らは半正値なモジュライ関手についての一般的なGIT安定性判定を作り、KSB安定多様体をその応用として扱う。

## 背景と問題設定

族 $f:X\to B$ の多重標準層の直像から得る $\det f\_\ast \omega\_{X/B}^{[k]}$ は、モジュライ空間の射影性に関係するHodge線束である。ここで角括弧は論文の多重標準層の記法を表す。標準線形化での結果と、このような直像から作る線形化での結果を区別する必要がある。

Introductionでいうgoodなモジュライ関手は、分離性、有界性、固有性、有限自己同型群、Hilbertスキームの構成可能部分によるパラメータ付けを備えるものである。これはAlperのgood moduli spaceという用語とは異なる。半正値性は、滑らかな完備曲線上の族で、十分高い次数の直像層がnefとなる条件である。

## 主結果

### KSB安定多様体の漸近安定性（Theorem 1.1）

KSB安定多様体を漸近GIT安定にする線形化の列が存在し、次元 $d$、体積 $\nu$ を固定した粗モジュライ空間をGIT商として実現できる。

Introductionの式(1.6.6)はその線形化を具体的に示す。十分大きく可除な $k$ と、$\mathbb P^{r-1}$ に普遍的に埋め込まれた族 $f:X\to H^{r,k}$ に対し、ある $\mu\_0(k)>0$ があって、すべての $\mu\geq\mu\_0$ で

$$
\det\bigl(f\_\ast \omega\_{X/H^{r,k}}^{[k]}\bigr)
\otimes\bigl(\det f\_\ast \omega\_{X/H^{r,k}}^{[k\mu]}\bigr)^r
$$

に関する安定点集合が $H^{r,k}$ 全体となる。異なる指数の行列式束を組み合わせる点が具体的な内容である。

### 一般のモジュライ関手への拡張（Theorem 1.4）

goodで関手的に偏極され、半正値なモジュライ関手の対象は、論文で構成する線形化に関して漸近安定となり、その関手はGIT商による粗モジュライ空間を持つ。KSB安定多様体についての主定理はこの一般定理の一例である。

### 半正値性から弱正値性へ（Theorem 1.5）

goodなモジュライ関手が半正値なら、ある正整数 $k\_0$ が存在し、任意の被約準射影スキーム $Y$ 上の対象 $f:(X,L)\to Y$ について、$k$ が $k\_0$ の倍数であれば $f\_\ast L^{[k]}$ が $Y$ 全体で弱正値となる。非正規な底も含める点が、GIT判定を適用するために重要である。

### KSB族の直像の弱正値性（Corollary 1.6）

次元 $d$ と体積 $\nu$ を固定すると、ある $k\_0>0$ が存在し、被約準射影底 $B$ 上の任意のKSB安定族について

$$
f\_\ast \omega\_{X/B}^{[k]}\text{ は }B\text{ 上弱正値}\qquad(k\_0\mid k)
$$

となる。滑らかなファイバーや正規な底に限定した正値性から、必要なパラメータ空間全体へ議論を進める結果である。

## 証明の見取り図

正規な底では特異点解消と弱正値性の降下を使えるが、非正規な底では同じ降下が一般には成り立たない。著者らはモジュライ関手の固有性を用いて安定還元を作り、平坦な被覆の上で直像層を適切に延長する。

高次元の底では層状の安定還元とGabberの延長定理が、延長問題を離散付値環上の問題へ還元する役割を果たす。その弱正値性をViehweg型のGIT判定へ入れる。単一のHodge線束だけを最適な線形化にできるかという問題は、Section 1.Cで残る課題として説明されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40583)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40583v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.4, 1.5; Corollary 1.6; equation (1.6.6)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40583v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
