---
layout: paper
title: "On the atomic decomposition of complete intersection in flag varieties"
title_ja: "旗多様体の完全交叉とHodge atom"
authors: "Boris Alexeev, Leonardo F. Cavenaghi, Giovane Galindo, Bogdan Georgiev, Ludmil Katzarkov, Pedro Antonio Muniz Martins"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
  - math.SG
arxiv_abstract: "We develop a root-theoretic localization formalism for genus-zero Gromov--Witten invariants of flag varieties and of smooth zero loci of globally generated homogeneous vector bundles. The resulting invariants are expressed as finite sums over decorated trees whose contributions are determined by the root system of the ambient flag variety and by the torus weights of the defining bundle. We connect these computations with the Theory of Hodge Atoms of Katzarkov--Kontsevich--Pantev--Yu via the matrix of small quantum multiplication by first Chern class. Let $X$ be a Fano fourfold with $h^{3,1}(X)=1$ arising as a hyperplane section of a suitable Fano fivefold. Its cohomology decomposes into a monodromy-fixed part and the middle vanishing cohomology. This decomposition is preserved by quantum multiplication by the first Chern class. Moreover, it acts by a scalar on the vanishing summand. We show, for the monodromy-fixed block, that (a) if every eigenvalue has algebraic multiplicity at most two and $X$ is Hodge general, then $X$ is irrational; (b) if every eigenvalue has Jordan defect at most one and $X$ is rational, then every weak factorization contains a smooth surface center whose minimal model is a projective K3 surface. Many applications are presented."
topic: algebraic-geometry
tags:
  - fano-varieties
  - hodge-theory
  - algebraic-cycles-enumerative
  - birational-geometry
arxiv_id: "2609.21914v1"
arxiv_url: "https://arxiv.org/abs/2609.21914"
arxiv_submitted: "2026-09-18"
arxiv_updated: "2026-09-18"
summary: "旗多様体とその等質ベクトル束の滑らかな零点集合について、種数0 Gromov--Witten不変量を根系データから計算する局所化形式を構成する。量子第一Chern類作用をHodge atomと結び、特定のFano四次元多様体の非有理性および有理な場合のK3曲面中心への制約を導く。"
abstract_en: "We develop a root-theoretic localization formalism for genus-zero Gromov--Witten invariants of flag varieties and of smooth zero loci of globally generated homogeneous vector bundles. The resulting invariants are expressed as finite sums over decorated trees whose contributions are determined by the root system of the ambient flag variety and by the torus weights of the defining bundle. We connect these computations with the Theory of Hodge Atoms of Katzarkov--Kontsevich--Pantev--Yu via the matrix of small quantum multiplication by first Chern class. Let $X$ be a Fano fourfold with $h^{3,1}(X)=1$ arising as a hyperplane section of a suitable Fano fivefold. Its cohomology decomposes into a monodromy-fixed part and the middle vanishing cohomology. This decomposition is preserved by quantum multiplication by the first Chern class. Moreover, it acts by a scalar on the vanishing summand. We show, for the monodromy-fixed block, that (a) if every eigenvalue has algebraic multiplicity at most two and $X$ is Hodge general, then $X$ is irrational; (b) if every eigenvalue has Jordan defect at most one and $X$ is rational, then every weak factorization contains a smooth surface center whose minimal model is a projective K3 surface. Many applications are presented."
summary_en: ""
abstract_ja: "旗多様体および大域生成された等質ベクトル束の滑らかな零点集合に対し、種数0 Gromov--Witten不変量を装飾木の有限和として表す根論的局所化法を構成する。第一Chern類による小量子積の行列をHodge atom理論に接続する。$h^{3,1}(X)=1$ のFano四次元多様体では、固有値の重複度条件から非有理性を得て、合理的な場合には弱分解にK3曲面を最小モデルとする中心が必要になる。"
abstract_source_url: "https://arxiv.org/abs/2609.21914"
license_name: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.21914](https://arxiv.org/abs/2609.21914)
- **著者:** Boris Alexeev, Leonardo F. Cavenaghi, Giovane Galindo, Bogdan Georgiev, Ludmil Katzarkov, Pedro Antonio Muniz Martins
- **初回投稿日:** 2026-09-18
- **最終更新日:** 2026-09-18
- **主分類・副分類:** math.AG, math.DG, math.SG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

旗多様体とその等質ベクトル束の滑らかな零点集合について、種数0 Gromov--Witten不変量を根系データから計算する局所化形式を構成する。量子第一Chern類作用をHodge atomと結び、特定のFano四次元多様体の非有理性および有理な場合のK3曲面中心への制約を導く。

旗多様体および大域生成された等質ベクトル束の滑らかな零点集合に対し、種数0 Gromov--Witten不変量を装飾木の有限和として表す根論的局所化法を構成する。第一Chern類による小量子積の行列をHodge atom理論に接続する。$h^{3,1}(X)=1$ のFano四次元多様体では、固有値の重複度条件から非有理性を得て、合理的な場合には弱分解にK3曲面を最小モデルとする中心が必要になる。

この紹介はAbstractとIntroductionに記された主張と方法の範囲に限る。後続節の証明を独立に検証したものではない。

## 背景と問題設定

旗多様体では根系、Weyl群、Schubert基底、トーラス固定点が明示的であり、仮想局所化を組合せ論へ落とし込める。本論文はこの計算可能性を、量子コホモロジーから双有理幾何の障害を抽出するHodge atom理論へ接続する。

## 主結果

### Fano四次元多様体への帰結

Introductionでは概略として次のように述べられている。適切なFano五次元多様体の超平面切断で $h^{3,1}(X)=1$ を満たすFano四次元多様体 $X$ を考える。第一Chern類による量子積がモノドロミー不変部分で持つ各固有値の代数的重複度が高々2で、$X$ がHodge一般なら $X$ は非有理である。また各固有値のJordan defectが高々1で $X$ が有理なら、任意の弱分解は最小モデルが射影K3曲面となる滑らかな曲面中心を含む。

## 証明の見取り図

固定写像の寄与を根と束のweightから装飾木ごとに計算し、量子Lefschetz型のfunctorialityによって完全交叉へ移す。得られた第一Chern類量子積の行列をcoarse Hodge atomへ入力し、モノドロミー不変部分と中間消滅コホモロジーの分解を通じて双有理的制約を読む。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.21914](https://arxiv.org/abs/2609.21914)
- **Introduction:** Section 1, pp. 2–10
- **Introduction中で言及された主要定理番号:** Introductionの主要結果群
- **確認したarXivバージョン:** 2609.21914v1
- **確認したライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
